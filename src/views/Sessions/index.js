import React, { useState, useEffect } from 'react'

import { Badge } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { MDBDataTable } from 'mdbreact'

const Sessions = () => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        setSessions(JSON.parse(localStorage.getItem("sessions")))
    }, [])

    const data = {
        columns: [
            {
                label: 'ID',
                field: 'event_id',
                sort: 'asc'
            },
            {
                label: 'Date',
                field: 'event_date',
                sort: 'asc'
            },
            {
                label: 'Room',
                field: 'room',
                sort: 'asc'
            },
            {
                label: 'Module',
                field: 'module',
                sort: 'asc'
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc'
            }

        ],
        rows: sessions.map(item => {
            return {
                event_id: item.event_id, 
                event_date: item.event_date, 
                room: item.room.uniqueName, 
                module: <span><Badge variant="primary">{item.module.uniqueName}</Badge> / {item.module.name}</span>,
                action: <Link to={"/attendance/" + item.id}>View Attendance</Link>
            }
        })
    }

    return (
        <div>
            <h1>Sessions</h1>
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
                noBottomColumns
            />
        </div>
    )
}


export default Sessions