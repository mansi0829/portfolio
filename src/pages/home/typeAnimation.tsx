import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "A Student",
                    "MERN Stack Developer",
                    "Competative Programming",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;