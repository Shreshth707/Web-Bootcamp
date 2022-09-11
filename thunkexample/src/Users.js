import { useEffect } from 'react';
import {fetchUsers} from './redux/thunk/thunkapi';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    const userData = useSelector(state => state.users)
    const dispatch = useDispatch();
    let {loading, users, error} = userData;
   
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    
  return (
    <div>
        {
            loading? <h1>Loading....</h1>: users.map(u => <h2 key={u.id}> {u.email}, {u.name} </h2>)
        }
    </div>
  )
}
