import React, {useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import PetInfo from '../components/PetInfo'; 
import EditPetForm from '../components/EditPetForm';
import { Router, Link } from '@reach/router';

export default () => {
    return (
        <>
            <div className="container">
                <Link to="/">Home</Link> | 
                <Link to="/new"> Add a pet to the shelter</Link>
            </div>
            
            <Router>
                <PetList path="/" />
                <PetForm path="/new" />
                <PetInfo path="/pet/:_id" />
                <EditPetForm path="/edit/:_id" />
            </Router>

        </>
    )
}
