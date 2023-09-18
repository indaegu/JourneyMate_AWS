import React, { useEffect } from "react";
import io from "socket.io-client";

const Socket = () => {
    const ENDPOINT = "https://api.journeymate.link/";

    useEffect(() => {
        const socket = io(ENDPOINT, { withCredentials: true });
        socket.emit("init");

        return () => {
            socket.close();
        };
    }, []);

    return null;
}

export default Socket;
