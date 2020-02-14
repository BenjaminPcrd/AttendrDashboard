import React, { useState, useEffect } from 'react'
import { Table, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Attendance = () => {
    const [attendances, setAttendances] = useState([])
    const { id } = useParams()

    useEffect(() => {
        let sessions = JSON.parse(localStorage.getItem("sessions"))
        let attendance = sessions.filter(item => item.id === id)[0].attendance.items
        setAttendances(attendance)
    }, [id])

    return (
        <div>
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