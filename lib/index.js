"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidV4 = exports.LocalVideoStream = exports.SkyWayRoom = exports.SkyWayMediaDevices = exports.SkyWayContext = exports.SkyWayAuthToken = void 0;
const buttonArea = document.getElementById("button-area");
const theirMediaArea = document.getElementById("their-media-area");
const roomNameInput = document.getElementById("room-name");
const myId = document.getElementById("my-id");
exports.SkyWayAuthToken = skyway_room.SkyWayAuthToken, exports.SkyWayContext = skyway_room.SkyWayContext, exports.SkyWayMediaDevices = skyway_room.SkyWayMediaDevices, exports.SkyWayRoom = skyway_room.SkyWayRoom, exports.LocalVideoStream = skyway_room.LocalVideoStream, exports.uuidV4 = skyway_room.uuidV4;
(() => __awaiter(void 0, void 0, void 0, function* () {
    // 1
    const myVideo = document.getElementById("my-video");
    const myCapture = document.getElementById("my-capture");
    const { audio, video, } = yield exports.SkyWayMediaDevices.createMicrophoneAudioAndCameraStream(); // 2
    const displayStream = yield navigator.mediaDevices.getDisplayMedia();
    const [displayTrack] = displayStream.getVideoTracks();
    const displayVideo = new exports.LocalVideoStream("label", displayTrack);
    //myCapture.srcObject = displayStream;
    displayVideo.attach(myCapture); // 3
    video.attach(myVideo); // 3
    yield myVideo.play(); // 4
    const testToken = new exports.SkyWayAuthToken({
        jti: (0, exports.uuidV4)(),
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 600,
        scope: {
            app: {
                id: "0919bf13-8251-4c27-bdb0-2f5b8c41ceb2",
                turn: true,
                actions: ["read"],
                channels: [
                    {
                        id: "*",
                        name: "*",
                        actions: ["write"],
                        members: [
                            {
                                id: "*",
                                name: "*",
                                actions: ["write"],
                                publication: {
                                    actions: ["write"],
                                },
                                subscription: {
                                    actions: ["write"],
                                },
                            },
                        ],
                        sfuBots: [
                            {
                                actions: ["write"],
                                forwardings: [
                                    {
                                        actions: ["write"]
                                    }
                                ]
                            }
                        ]
                    },
                ],
            },
        },
    });
    const tokenString = testToken.encode("YZatigbFmhxZgS5PTM08kiK6vkp+4Y0EOvG2F5dDMw4=");
    document.getElementById("join").onclick = () => __awaiter(void 0, void 0, void 0, function* () {
        if (roomNameInput.value === "")
            return;
        const context = yield exports.SkyWayContext.Create(tokenString);
        const room = yield exports.SkyWayRoom.FindOrCreate(context, {
            type: "p2p",
            name: roomNameInput.value,
        });
        const me = yield room.join();
        myId.textContent = me.id;
        //await me.publish(audio);
        yield me.publish(video);
        yield me.publish(displayVideo);
        function subscribeAndAttach(publication) {
            return __awaiter(this, void 0, void 0, function* () {
                // 3
                if (publication.publisher.id === me.id)
                    return;
                const { stream } = yield me.subscribe(publication.id); // 3-2-1
                let newMedia; // 3-2-2
                switch (stream.track.kind) {
                    case "video":
                        newMedia = document.createElement("video");
                        newMedia.playsInline = true;
                        newMedia.autoplay = true;
                        break;
                    case "audio":
                        newMedia = document.createElement("audio");
                        newMedia.controls = true;
                        newMedia.autoplay = true;
                        break;
                    default:
                        return;
                }
                stream.attach(newMedia); // 3-2-3
                theirMediaArea.appendChild(newMedia);
            });
        }
        room.publications.forEach(subscribeAndAttach); // 1
        room.onStreamPublished.add((e) => {
            // 2
            subscribeAndAttach(e.publication, me);
        });
    });
}))(); // 1
