import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGistsAsync, selectUser } from '../reducerSlices/userReducer';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [gistList, setGistList] = useState([]);

  const getUsers = () => {
    dispatch(getUserGistsAsync("iboss-ptk1"))
  }

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(user)
    setGistList(user.results)
  }, [user])

  if (user.status !== "idle") return <div>{user.status}</div>

  return <div>{gistList.map(gist => <div key={gist.node_id}>{gist.url}</div>)}</div>
}

export default App;
