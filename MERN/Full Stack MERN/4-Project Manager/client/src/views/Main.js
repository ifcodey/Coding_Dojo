import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListProjects from '../components/ListProject'

const Main = () => {
  const [projects, setProjects] = useState([]);

  const removeFromDom = (projectId) => {
    setProjects(projects.filter((project) => project._id !== projectId));
  };

  return (
    <div>
      <h1>Project Manager</h1>
      <ListProjects
        projects={projects}
        setProjects={setProjects}
        removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main
