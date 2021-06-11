import React, { useContext } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'

import Login from './pages/Login'

import Consultation from './pages/Consultation'

import { Context } from './Context/AuthContext'

export default function Routes() {

  function CustomRoute({ isPrivate, ...rest }: any) {
    const { authenticated } = useContext(Context)

    if (isPrivate && !authenticated) {
      return <Redirect to='/login' />
    }

    return <Route {...rest} />

  }

  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <CustomRoute isPrivate path='/consultation' exact component={Consultation} />
      </Switch>
    </>
  )
}