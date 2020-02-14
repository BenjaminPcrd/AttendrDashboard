import React, { useEffect } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Sessions from './views/Sessions'
import Attendance from './views/Attendance'

const App = () => {
    useEffect(() => {
        const url = 'https://xhg56111bk.execute-api.eu-west-2.amazonaws.com/prod/attendance/accelerator'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let sessions = data.items
                sessions = sessions.map(item => {
                    return {...item, module: JSON.parse(item.module), room: JSON.parse(item.room)}
                })
                localStorage.setItem("sessions", JSON.stringify(sessions))
            })
            .catch(error => console.log(error))
    }, [])
    
    return (
        <Router>
            <Switch>
                <Route path="/sessions" children={<Sessions />}/>
                <Route path="/attendance/:id" children={<Attendance />}/>
                <Redirect from="/" to="/sessions" />
            </Switch>
        </Router>
    )
    
}

export default App