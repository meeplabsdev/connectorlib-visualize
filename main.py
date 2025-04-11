import asyncio
import hashlib
import json

import eel
import websockets

KEY = "thisIsATestKey!"


async def take_snapshot(uri: str) -> dict:
    async with websockets.connect(uri) as websocket:
        await websocket.send(
            json.dumps(
                {
                    "id": "IdentityRequest",
                    "username": "Notch",
                    "uuid": "069a79f4-44e9-4726-a5befca90e38aaf5",
                }
            )
        )

        identity_challenge = json.loads(await websocket.recv())
        result = hashlib.sha256(f"{identity_challenge.get('nonce')}{KEY}".encode("utf-8")).hexdigest()

        await websocket.send(
            json.dumps(
                {
                    "id": "IdentityChallenge",
                    "uuid": "069a79f4-44e9-4726-a5befca90e38aaf5",
                    "result": result,
                }
            )
        )

        identity_response = json.loads(await websocket.recv())
        session = identity_response.get("session")

        await websocket.send(
            json.dumps(
                {
                    "id": "DataRequest",
                    "session": session,
                }
            )
        )

        data_response = json.loads(await websocket.recv())
        return data_response


def main():
    eel.init("web")

    @eel.expose
    def get_snapshot(uri):
        return asyncio.run(take_snapshot(uri))

    eel.start("index.html", mode="edge")


if __name__ == "__main__":
    main()
