import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homepage'
import Signin from './pages/signin'
import Signup from './pages/signup'
import PasswordReset from './pages/passwordreset'
import Settings from './pages/settings'
import WorkoutPlanDetails from './pages/workoutplanDetails'
import WorkoutPlans from './pages/workoutplans'
import Profile from './pages/profile'
import ProtectedComponent from './utilities/protectedcomponent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/reset',
    element: <PasswordReset />,
  },
  {
    path: '/settings',
    element: (
      <ProtectedComponent>
        <Settings />
      </ProtectedComponent>
    ),
  },
  {
    path: '/workoutplans',
    element: (
      <ProtectedComponent>
        <WorkoutPlans />
      </ProtectedComponent>
    ),
  },
  {
    path: '/workoutdetails',
    element: (
      <ProtectedComponent>
        <WorkoutPlanDetails />
      </ProtectedComponent>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedComponent>
        <Profile />
      </ProtectedComponent>
    ),
  },
])

export default router
