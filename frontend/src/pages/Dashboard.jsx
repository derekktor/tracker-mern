import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <div>
      {user && <h1>Hello, {user.name}</h1>}
    </div>
  )
}

export default Dashboard