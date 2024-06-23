import { useState } from "react";

export default function BangladeshCricketTeam() {
    //declaring state management
    const [count, setCount] = useState(11);
    //adding events to manage state
    const handleKick = () => {
        const newCount =count - 1;
        setCount(newCount);
    };
    const handleInvite = () => {
        const newCount =count + 1;
        setCount(newCount);
    };
    // css object
    const teamStyle = {
        border: "3px ridge plum",
        borderRadius: "15px",
        margin: "20px",
        padding: "15px"
    };
    return (
        <div style={teamStyle}>
            <h2>Bangladesh Cricket Team</h2>
            <h6>For T20 WorldCup 2024 (WestIndies&USA)</h6>
            <p style={{ fontWeight: "bold", color: "turquoise" }}>Team Count: {count}</p>
            <button style={{marginRight:"20px"}} onClick={handleKick}>Kick</button>
            <button onClick={handleInvite}>Invite</button>
        </div>
    );
};