import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
} from "@mui/material";

const ListProject = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { removeFromDom, projects, setProjects } = props;
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/projects")
            .then((res) => setProjects(res.data));
        setLoaded(true);
    }, []);

    const processClick = (numbers, id) => {
        axios.put(`http://localhost:8000/projects/${id}/edit`,
            { "status.statusNum": numbers })
    }

    const createRouter =()=>{
        navigate("/project/new/")
    }

    return (
        <div>
            {" "}
            <Paper>
                <TableContainer>
                    <Table aria-label="Project Table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={"center"}>Backlog</TableCell>
                                <TableCell align={"center"}>inProg</TableCell>
                                <TableCell align={"center"}>Completed</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {loaded &&
                                projects.map((project, i) => (
                                    <TableRow hover key={i}>
                                        {project.status.statusNum == 0}?
                                        <TableCell align={"center"}>{project.name}</TableCell>
                                        <TableCell align={"center"}> {project.date}</TableCell>
                                        <TableCell align={"center"}>
                                            <Button onClick={(e) => processClick(1, project._id)}>
                                                Start Project
                                            </Button>
                                            &nbsp;
                                        </TableCell>:<TableCell></TableCell>

                                        {project.status.statusNum == 1}?
                                        <TableCell align={"center"}>{project.name}</TableCell>
                                        <TableCell align={"center"}> {project.date}</TableCell>
                                        <TableCell align={"center"}>
                                            <Button onClick={(e) => processClick(1, project._id)}>
                                                Complete
                                            </Button>
                                            &nbsp;
                                        </TableCell>:<TableCell></TableCell>

                                        {project.status.statusNum == 2}?
                                        <TableCell align={"center"}>{project.name}</TableCell>
                                        <TableCell align={"center"}> {project.date}</TableCell>
                                        <TableCell align={"center"}>
                                            <DeleteButton
                                                id={project._id}
                                                removeFromDom={() => removeFromDom(project._id)}
                                            />
                                            &nbsp;
                                        </TableCell>:<TableCell></TableCell>

                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default ListProject;
