

import { Publication } from '@skyway-sdk/core';
import {
    SkyWayAuthToken,
    SkyWayContext,
    SkyWayMediaDevices,
    SkyWayRoom,
    LocalVideoStream,
    RemoteVideoStream,
    RoomPublication,
    LocalStream,
    uuidV4,
    RemoteDataStream
} from '@skyway-sdk/room';

const buttonArea = <HTMLDivElement>document.getElementById("button-area")!;
const theirMediaArea = <HTMLDivElement>document.getElementById("their-media-area")!;
const roomNameInput = <HTMLInputElement>document.getElementById("room-name")!;
const myId = <HTMLSpanElement>document.getElementById("my-id")!;



(async () => {
    // 1
    const myVideo = <HTMLVideoElement>document.getElementById("my-video")!;
    const myCapture = <HTMLVideoElement>document.getElementById("my-capture")!;

    const {
        audio,
        video,
    } = await SkyWayMediaDevices.createMicrophoneAudioAndCameraStream(); // 2



    const displayStream = await navigator.mediaDevices.getDisplayMedia();

    const [displayTrack] = displayStream.getVideoTracks();
    const displayVideo = new LocalVideoStream("label", displayTrack);
    //myCapture.srcObject = displayStream;
    displayVideo.attach(myCapture); // 3



    video.attach(myVideo); // 3
    await myVideo.play(); // 4


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
    const tokenString = testToken.encode(
        "YZatigbFmhxZgS5PTM08kiK6vkp+4Y0EOvG2F5dDMw4="
    );

    document.getElementById("join")!.onclick = async () => {
        if (roomNameInput.value === "") return;

        const context = await SkyWayContext.Create(tokenString);

        const room = await SkyWayRoom.FindOrCreate(context, {
            type: "p2p",
            name: roomNameInput.value,
        });

        const me = await room.join();

        myId.textContent = me.id;

        //await me.publish(audio);
        await me.publish(video);
        await me.publish(displayVideo);

        async function subscribeAndAttach(publication: RoomPublication) {
            // 3
            if (publication.publisher.id === me.id) return;



            const { stream}: {stream: RemoteVideoStream} = await me.subscribe(publication.id); // 3-2-1

            let newMedia; // 3-2-2
            switch (stream.track.kind) {
                case "video":
                    newMedia = <HTMLVideoElement>document.createElement("video");
                    newMedia.playsInline = true;
                    newMedia.autoplay = true;
                    stream.attach(newMedia); // 3-2-3
                    break;
                case "audio":
                    newMedia = <HTMLAudioElement>document.createElement("audio");
                    newMedia.controls = true;
                    newMedia.autoplay = true;
                    break;
                default:
                    return;
            }


            theirMediaArea.appendChild(newMedia);




        }

        room.publications.forEach(subscribeAndAttach); // 1

        room.onStreamPublished.add((e) => {
            // 2
            //subscribeAndAttach(e.publication, me);
            subscribeAndAttach(e.publication);
        });

    };


})(); // 1

