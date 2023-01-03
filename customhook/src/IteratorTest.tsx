// below, iteratorTest.tsx
import { useIterator } from './useIterator';
import { useEffect } from 'react';

export const IteratorTest = () => {
  const hookReturn = useIterator('https://randomuser.me/api/');

  const { users, current, isLoading, next, previous } = hookReturn;

  useEffect(() => {
    console.log('usersList: ', users);
    console.log('current Index: ', current);
    console.log(`usersList[${current}]: `, users[current]);
  }, [current]);

  return (
    <div>
      <div>
        <button onClick={() => previous()}>Previous</button>
        <button onClick={() => next()}>Next</button>
      </div>

      <div>
        <h1>Current user:</h1>
        {users.length > 0 && (
          <div className='flex flex-col items-center'>
            <img
              src={users[current].picture}
              alt=''
              className='w-16 rounded-full'
            />
            <p>{users[current].name}</p>
          </div>
        )}
      </div>

      <div className='bg-slate-800'>
        <h3>All users:</h3>
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <img src={user.picture} alt='' className='w-16 rounded-full' />
          </div>
        ))}
      </div>
      <div>
        {isLoading ? (
          'Loading...'
        ) : (
          <div>{/* <p> Current user: {current.name}</p> */}</div>
        )}
      </div>
    </div>
  );
};
