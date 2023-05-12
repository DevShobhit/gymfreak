import Signin from '../pages/signin'

const ProtectedComponent = ({ children }) => {
  const token = sessionStorage.getItem('Token')
  return <>{token ? children : <Signin />}</>
}

export default ProtectedComponent
