import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from './loading/index'

const Loading = ({ error }) => {
  if (error) return <div>Error loading component</div>
  else return <Loader />
}

const Dashboard = Loadable({
  loader: () => import('./dashboard/index.js'),
  loading: Loading
})

const Logout = Loadable({
  loader: () => import('./logout/index.js'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('./login/index.js'),
  loading: Loading
})

const PrivateRoute = Loadable({
  loader: () => import('../utils/pR'),
  loading: Loading
})

const Register = Loadable({
  loader: () => import('./register/index.js'),
  loading: Loading
})

const Profile = Loadable({
  loader: () => import('./profile/index.js'),
  loading: Loading
})

const Labeller = Loadable({
  loader: () => import('./labeller/index.js'),
  loading: Loading
})

const Project = Loadable({
  loader: () => import('./project/index'),
  loading: Loading
})

const Redirect = Loadable({
  loader: () => import('./redirect.js'),
  loading: Loading
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path={`/redirect`} component={Redirect} />
            <Route path={`/logout`} component={Logout} />
            <Route path={`/login`} component={Login} />
            <Route path={`/register`} component={Register} />
            <PrivateRoute exact path={`/`} component={Dashboard} />
            <PrivateRoute exact path={`/profile`} component={Profile} />
            <PrivateRoute
              path={`/labeller/:projectId/:imageId`}
              component={Labeller}
            />
            <PrivateRoute path={`/project/:projectId`} component={Project} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App
