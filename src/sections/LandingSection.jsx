import { useEffect, useState } from "react";

export default function LandingSection() {
    const cyclingWords = ['DEVELOPER', 'CREATOR', 'WRITER', 'COLLABORATOR'];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWord(prevWord => {
                return (prevWord + 1) % cyclingWords.length;
            });
        }, 5000);
    }, [cyclingWords.length]);

    return (
        <div className="landing-section">
            <div className="landing-section-title">
                <div className="cycling-word" id="cycling-word">
                    <h1>I am a </h1>
                    {cyclingWords[currentWord]}
                </div>
            </div>
        </div>
    )
}