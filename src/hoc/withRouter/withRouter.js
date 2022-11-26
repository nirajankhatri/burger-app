import React from 'react'
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'

const withRouter = (WrappedComponent) => (props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const outletContext = useOutletContext();

  return (
    <WrappedComponent 
      {...props}
      navigate={navigate}
      location={location}
      outletContext={outletContext}
    />
  )
}

export default withRouter