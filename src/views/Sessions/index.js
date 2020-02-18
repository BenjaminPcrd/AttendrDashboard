import React, { useState, useEffect } from 'react'

import { Badge } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { MDBDataTable } from 'mdbreact'

const Sessions = () => {
    const [sessions, setSessions] = useState(null)
    
    useEffect(() => {
        setSessions(JSON.parse(localStorage.getItem("sessions")))
    }, [])

    const data = {
        columns: [
            {
                label: 'ID',
                field: 'event_id'
            },
            {
                label: 'Date',
                field: 'event_date'
            },
            {
                label: 'Room',
                field: 'room'
            },
            {
                label: 'Module',
                field: 'module'
            },
            {
                label: 'Action',
                field: 'action'
            },
            {
                label: 'Summary',
                field: 'summary'
            }

        ],
        rows: sessions != null ? (
            sessions.map(item => {
                return {
                    event_id: item.event_id, 
                    event_date: item.event_date, 
                    room: item.room.uniqueName, 
                    module: <span><Badge variant="primary">{item.module.uniqueName}</Badge> / {item.module.name}</span>,
                    action: <Link to={"/attendance/" + item.id}>View Attendance</Link>,
                    summary: <span>{item.attendance.items.map(i => i.mark_id).reduce((a, v) => a + v)} / {(item.attendance.items).length}</span>
                }
            })
        ) : []
    }
    
    return (
        <div>
            <h1>Sessions</h1>
            {
                sessions != null ? (
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                        noBottomColumns
                        order={['event_date', 'asc']}
                    />
                ) : null
            }
            
        </div>
    )
}


export default Sessions