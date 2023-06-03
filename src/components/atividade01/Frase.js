import React, { useState, useEffect } from "react";

function Frase() {
    const [substring, setSubstring] = useState("");

    useEffect(() => {
        let i = 0;
        const frase = "Venha estudar na Fatec!!!";

        const intervalId = setInterval(() => {
            setSubstring(frase.substring(0, i));
            i++;
            if (i > frase.length) {
                i = 0;
            }
        }, 200);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h3>{substring}</h3>
        </div>
    );
}

export default Frase;
