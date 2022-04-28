var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SkyWayAuthToken, SkyWayContext, SkyWayMediaDevices, SkyWayRoom, LocalVideoStream, uuidV4 } from '@skyway-sdk/room';
const buttonArea = document.getElementById("button-area");
const theirMediaArea = document.getElementById("their-media-area");
const roomNameInput = document.getElementById("room-name");
const myId = document.getElementById("my-id");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // 1
    const myVideo = document.getElementById("my-video");
    const myCapture = document.getElementById("my-capture");
    const { audio, video, } = yield SkyWayMediaDevices.createMicrophoneAudioAndCameraStream(); // 2
    const displayStream = yield navigator.mediaDevices.getDisplayMedia();
    const [displayTrack] = displayStream.getVideoTracks();
    const displayVideo = new LocalVideoStream("label", displayTrack);
    //myCapture.srcObject = displayStream;
    displayVideo.attach(myCapture); // 3
    video.attach(myVideo); // 3
    yield myVideo.play(); // 4
    const testToken = new SkyWayAuthToken({
        jti: uuidV4(),
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
        const context = yield SkyWayContext.Create(tokenString);
        const room = yield SkyWayRoom.FindOrCreate(context, {
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
                        stream.attach(newMedia); // 3-2-3
                        break;
                    case "audio":
                        newMedia = document.createElement("audio");
                        newMedia.controls = true;
                        newMedia.autoplay = true;
                        break;
                    default:
                        return;
                }
                theirMediaArea.appendChild(newMedia);
            });
        }
        room.publications.forEach(subscribeAndAttach); // 1
        room.onStreamPublished.add((e) => {
            // 2
            //subscribeAndAttach(e.publication, me);
            subscribeAndAttach(e.publication);
        });
    });
}))(); // 1
