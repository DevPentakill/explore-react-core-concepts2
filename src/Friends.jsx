import "./Friends.css";
import { useEffect, useState } from "react";
import Friend from "./Friend";
export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);
    return (
        <div className="tiffin">
            <p>Best <b id="keyword">Friends:</b> {friends.length}</p>
            {friends.map(friend =>
                <Friend frnd={friend}></Friend>)
            }
        </div>
    )
}