import React, { useState, useEffect } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Spinner
} from 'react-bootstrap'

import Sessions from './views/Sessions'
import Attendance from './views/Attendance'

const App = () => {
    const [isSessions, setIsSessions] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("sessions") == null) {
            getData()
        } else {
            setIsSessions(true)
        }
    }, [])

    const getData = () => {
        console.log("getData")
        const url = 'https://xhg56111bk.execute-api.eu-west-2.amazonaws.com/prod/attendance/accelerator'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let sessions = data.items
                sessions = sessions.map(item => {
                    return {...item, module: JSON.parse(item.module), room: JSON.parse(item.room)}
                })
                localStorage.setItem("sessions", JSON.stringify(sessions))
                setIsSessions(false)
                setIsSessions(true)
            })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Row className="align-items-center">
                <Col><Image src={require('./assets/rguAccelerator.jpg')} width="150" /></Col>
                <Col><Image src={require('./assets/attendr-logo-primary.png')} width="150" /></Col>
            </Row>
            <Row className="justify-content-end">
                <Button onClick={() => getData()}>Refresh</Button>
            </Row>
            {
                isSessions ? (
                    <Router>
                        <Switch>
                            <Route path="/sessions" children={<Sessions />}/>
                            <Route path="/attendance/:id" children={<Attendance />}/>
                            <Redirect from="/" to="/sessions" />
                        </Switch>
                    </Router>
                ) : <Spinner animation="border" />
            }
            
        </Container>
        
    )
    
}

export default App