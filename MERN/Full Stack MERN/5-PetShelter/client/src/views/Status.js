import React, { useEffect, useState } from 'react';
import Form from '../comp/Form';
import axios from 'axios';
import Home from '../comp/Home';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
const Status = (props) => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [games, SetGames] = useState(1);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setAllPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [allPlayers]);

    const handleClick1 = (id, num) => {
        axios.put('http://localhost:8000/api/users/update/' + id, props.num == 1 ? { "status.game1": num } : props.num == 2 ? { "status.game2": num } : { "status.game3": num })
            .then(res => console.log(res))
    };


    return (
        <div>
            <h1>Player-Status</h1>
            <Link to={"/players/list"}>Back To Dashboard</Link> <br></br>
            <Link to={"/sts/game/1"}> | Game 1 | </Link><Link to={"/sts/game/2"} >Game 2 |</Link><Link to={"/sts/game/3"}> Game 3 | </Link>
            <table border="1" style={{ marginLeft: 450 }}>
                <thead>
                    <th>Player Name</th>
                    <th>Actions</th>
                </thead>

                {loaded && allPlayers.map((player, i) =>
                    <tr
                        key={i}>
                        <td>{player.name}</td>

                        <td>
                            {props.num == 1 ?
                                <div>
                                    <button onClick={() => handleClick1(player._id, 1)} style={{ backgroundColor: player.status.game1 == 1 ? "green" : "" }}>Playing</button>
                                    <button onClick={() => handleClick1(player._id, -1)} style={{ backgroundColor: player.status.game1 == -1 ? "red" : "" }} >Not Playing</button>
                                    <button onClick={() => handleClick1(player._id, 0)} style={{ backgroundColor: player.status.game1 == 0 ? "yellow" : "" }}>Un desired</button>
                                </div>
                                : props.num == 2 ?
                                    <div>
                                        <button onClick={() => handleClick1(player._id, 1)} style={{ backgroundColor: player.status.game2 == 1 ? "green" : "" }}>Playing</button>
                                        <button onClick={() => handleClick1(player._id, -1)} style={{ backgroundColor: player.status.game2 == -1 ? "red" : "" }} >Not Playing</button>
                                        <button onClick={() => handleClick1(player._id, 0)} style={{ backgroundColor: player.status.game2 == 0 ? "yellow" : "" }}>Un desired</button>
                                    </div>
                                    :
                                    <div>
                                        <button onClick={() => handleClick1(player._id, 1)} style={{ backgroundColor: player.status.game3 == 1 ? "green" : "" }}>Playing</button>
                                        <button onClick={() => handleClick1(player._id, -1)} style={{ backgroundColor: player.status.game3 == -1 ? "red" : "" }} >Not Playing</button>
                                        <button onClick={() => handleClick1(player._id, 0)} style={{ backgroundColor: player.status.game3 == 0 ? "yellow" : "" }}>Un desired</button>
                                    </div>
                            }

                        </td>
                    </tr>


                )}
            </table>

        </div>
    )
}

export default Status