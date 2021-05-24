import { Switch, Route} from 'react-router-dom'

import Home from './pages/Home'

import Login from './pages/Login'

import Consultation from './pages/Consultation'
import React from 'react'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login'  component={Login} />
        <Route path='/consultation' exact component={Consultation} />
      </Switch>
    </>
  )
}