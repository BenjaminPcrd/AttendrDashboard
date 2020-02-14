import React, { useState, useEffect } from 'react'

import { 
    Table, 
    Badge
} from 'react-bootstrap'

import { 
    useParams, 
    Link 
} from 'react-router-dom'

import { MDBDataTable } from 'mdbreact'

const Attendance = () => {
    const [session, setSession] = useState(null)
    const [attendance, setAttendance] = useState([])
    const { id } = useParams()

    useEffect(() => {
        let sessions = JSON.parse(localStorage.getItem("sessions"))

        let theSession = sessions.filter(item => item.id === id)[0]
        setSession(theSession)
        let theAttendance = theSession.attendance.items
        setAttendance(theAttendance)
    }, [id])

    const data = {
        columns: [
            {
                label: 'Student ID',
                field: 'studentUniqueName',
                sort: 'asc'
            },
            {
                label: 'Student name',
                field: 'studentName',
                sort: 'asc'
            },
            {
                label: 'Mark',
                field: 'mark',
                sort: 'asc'
            },
            {
                label: 'Marked at',
                field: 'markedAt',
                sort: 'asc'
            }
        ],
        rows: attendance.map(item => {
            return {
                studentUniqueName: item.studentUniqueName,
                studentName: item.studentName,
                mark: item.mark_id === 0 ? <Badge variant="danger">{item.mark}</Badge> : <Badge variant="success">{item.mark}</Badge>,
                markedAt: item.mark_id === 0 ? null : new Date(item.markedAt).toLocaleString()
            }
        })
    }

    return (
        <div>
            <Link to={"/sessions/"}>Go back</Link>
            <h1>Attendance</h1>
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
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
        </div>
    )
}

export default Attendance