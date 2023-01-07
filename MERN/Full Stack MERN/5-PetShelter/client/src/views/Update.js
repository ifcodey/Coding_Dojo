import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../comp/Form';
import { navigate } from '@reach/router';


const Update = (props) => {
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, []);

    const updatePerson = pet => {
        axios.put('http://localhost:8000/api/users/update/' + props.id, pet)
            .then(navigate('/players/list'))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Update Pet</h1>
            {loaded &&
                <Form
                    onSubmitProp={updatePerson}
                    initialName={pet.name}
                    initialDescreption={pet.descreption}
                    initialType={pet.type}
                    initialSkillOne={pet.skills.skill1}
                    initialSkillTwo={pet.skills.skill2}
                    initialSkillThree={pet.skills.skill3}
                />
            }
        </div>
    )
}

export default Update;