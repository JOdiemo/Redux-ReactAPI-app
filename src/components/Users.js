import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
  const { users, isLoading, error,amount } = useSelector((store) => store.users);
  console.log(users);
  return (
    <div>
      <p>{isLoading}</p>
      <p>{error}</p>
      <p>{amount}</p>
    </div>
  )
}

export default Users;
