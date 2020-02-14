import React, { useState, useEffect } from 'react'

import { 
    Table, 
    Badge,
    Row,
    Col
} from 'react-bootstrap'

import { 
    useParams, 
    Link 
} from 'react-router-dom'

const Attendance = () => {
    const [session, setSession] = useState(null)
    const [attendances, setAttendances] = useState([])
    const { id } = useParams()

    useEffect(() => {
        let sessions = JSON.parse(localStorage.getItem("sessions"))

        let theSession = sessions.filter(item => item.id === id)[0]
        setSession(theSession)
        let theAttendances = theSession.attendance.items
        setAttendances(theAttendances)
    }, [id])

    return (
        <div>
            <h1>Attendance</h1>
            <Link to={"/sessions/"}>Go back</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Room</th>
                        <th>Module</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        session != null ? (
                            <tr>
                                <td>{session.event_id}</td>
                                <td>{session.event_date}</td>
                                <td>{session.room.uniqueName}</td>
                                <td><Badge variant="primary">{session.module.uniqueName}</Badge> / {session.module.name}</td>
                            </tr>
                        ) : null
                    }
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Student ID</th>
                        <th>Student name</th>
                        <th>Mark</th>
                        <th>Marked at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendances.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.studentUniqueName}</td>
                                    <td>{item.studentName}</td>
                                    <td>{item.mark_id === 0 ? <Badge variant="danger">{item.mark}</Badge> : <Badge variant="success">{item.mark}</Badge>}</td>
                                    <td>{item.mark_id === 0 ? "Not marked" : new Date(item.markedAt).toLocaleString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Attendance