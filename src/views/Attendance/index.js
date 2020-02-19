import React, { useState, useEffect } from 'react'

import { 
    Table, 
    Badge,
    Card,
    CardGroup
} from 'react-bootstrap'

import { 
    useParams, 
    Link 
} from 'react-router-dom'

import { MDBDataTable } from 'mdbreact'

import PieChart from 'react-minimal-pie-chart'

import CsvDownload from 'react-json-to-csv'

const Attendance = () => {
    const [session, setSession] = useState(null)
    const [attendance, setAttendance] = useState(null)
    const [absenteeism, setAbsenteeism] = useState({ present: 0, absent: 0, perPresent: 0, perAbsent: 0 })
    const { id } = useParams()

    useEffect(() => {
        let sessions = JSON.parse(localStorage.getItem("sessions"))

        let theSession = sessions.filter(item => item.id === id)[0]
        setSession(theSession)
        let theAttendance = theSession.attendance.items
        setAttendance(theAttendance)

        let nbPresent = theAttendance.map(item => item.mark_id).reduce((i, j) => i + j)
        let total = theAttendance.length
        let nbAbsent = total - nbPresent
        setAbsenteeism({ present: nbPresent, absent: nbAbsent })

    }, [id])

    const data = {
        columns: [
            {
                label: 'Student ID',
                field: 'studentUniqueName',
            },
            {
                label: 'Student name',
                field: 'studentName'
            },
            {
                label: 'Mark',
                field: 'mark',
            },
            {
                label: 'Marked at',
                field: 'markedAt',
            }
        ],
        rows: attendance != null ? (
            attendance.map(item => {
                return {
                    studentUniqueName: item.studentUniqueName,
                    studentName: item.studentName,
                    mark: item.mark_id === 0 ? <Badge variant="danger">{item.mark}</Badge> : <Badge variant="success">{item.mark}</Badge>,
                    markedAt: item.mark_id === 0 ? null : new Date(item.markedAt).toLocaleString()
                }
            })
        ) : []
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
            
            <CardGroup>
                <Card>
                    <Card.Header>
                        Absenteeism rate
                    </Card.Header>
                    <Card.Body>
                        <PieChart
                            animate={true}
                            animationDuration={500}
                            animationEasing="ease-out"
                            data={[
                                {
                                    title: "present",
                                    value: absenteeism.present,
                                    color: 'green'
                                },
                                {
                                    title: "absent",
                                    value: absenteeism.absent,
                                    color: 'red'
                                }
                            ]}
                            label={({data, dataIndex}) => {
                                if(data[dataIndex].title === "present") {
                                    if(data[dataIndex].percentage > 0)
                                        return Math.round(data[dataIndex].percentage) + "%"
                                } else {
                                    if(data[dataIndex].percentage > 0)
                                        return Math.round(data[dataIndex].percentage) + "%"
                                }
                            }}
                            labelPosition={50}
                            labelStyle={{
                                fill: "white",
                                fontSize: "10px"
                            }}
                            style={{
                                height: "200px"
                            }}
                        />
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-around">
                        <Badge style={{fontSize: "20px"}} variant="success">{absenteeism.present} present</Badge>
                        <Badge style={{fontSize: "20px"}} variant="danger">{absenteeism.absent} absent</Badge>
                        <Badge style={{fontSize: "20px"}} variant="primary">{absenteeism.absent + absenteeism.present} total</Badge>
                    </Card.Footer>
                </Card>
            </CardGroup>
        
            {
                attendance != null ? (
                    <div>
                        <CsvDownload data={attendance} style={{
                            backgroundColor: '#007aff',
                            borderRadius:"6px",
                            border:"1px solid",
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                            padding: 10,
                            margin: 10
                        }}/>
                        <MDBDataTable
                            striped
                            bordered
                            hover
                            data={data}
                            noBottomColumns
                            entries={100}
                            order={['studentName', 'asc']}
                        />
                    </div>
                ) : null
            }
            
        </div>
    )
}

export default Attendance