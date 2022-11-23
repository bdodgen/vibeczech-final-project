import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkTeam from './WorkTeam';


export default function CurrentWorkTeams() {

    const [teams, setTeams] = useState([]);

    const getWorkTeams = async () => {
        const response = await axios('api/list-work-teams');
        setTeams(response.data);
    }

    useEffect(() => {
        getWorkTeams();
    }, [])

    return (
        <>
            {
                !teams
                    ? <></>
                    : teams.map(team => {
                        return <WorkTeam
                            key={team.id}
                            team={team}
                        />
                    })
            }
        </>
    )
}