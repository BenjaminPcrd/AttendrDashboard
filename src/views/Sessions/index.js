import React, { useState, useEffect } from 'react'
import { Table, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sessions = () => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        setSessions(JSON.parse(localStorage.getItem("sessions")))
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Room</th>
                        <th>Module</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sessions.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.event_id}</td>
                                    <td>{item.event_date}</td>
                                    <td>{item.room.uniqueName}</td>
                                    <td><Badge variant="primary">{item.module.uniqueName}</Badge> / {item.module.name}</td>
                                    <td><Link to={"/attendance/" + item.id}>View Attendance</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Sessions