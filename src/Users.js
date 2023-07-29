import React from 'react'
import { useSelector } from 'react-redux'

const users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users)
  return (
    <div>

    </div>
  )
}

export default users
