import Users from './components/Users';
import { getUserItems } from './store/users/userSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const { userItems , isLoading } = useSelector((store) => store.users);
  console.log(userItems);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getUserItems());
  });

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Users />
  );
}

export default App;
