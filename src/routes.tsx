import { Switch, Route} from 'react-router-dom'

import Home from './pages/Home'

import Login from './pages/Login'

import Consultation from './pages/Consultation'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact children={<Home />} />
      <Route path='/login' exact children={<Login />} />
      <Route path='/consultation' exact children={<Consultation />} />
    </Switch>
  )
}