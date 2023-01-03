// below, iteratorTest.tsx
import { useIterator } from './useIterator';

export const IteratorTest = () => {
  // const [userList, current, loading, next, previous] = useIterator(
  //   'https://randomuser.me/api/'
  // );

  // return complete object from useIterator('https://randomuser.me/api/');
  // const apiReturn = useIterator('https://randomuser.me/api/');

  const hookReturn = useIterator('https://randomuser.me/api/');
  // console.log('hookReturn: ', hookReturn);

  // destructure parameters of useIterator in individual variables
  const { usersList, currentUser, isLoading, next, previous } = hookReturn;

  // console.log(
  //   '\n users: ',
  //   usersList,
  //   '\n current: ',
  //   currentUser,
  //   '\n isLoading: ',
  //   isLoading,
  //   '\n next: ',
  //   next,
  //   '\n previous: ',
  //   previous
  // );

  return (
    <div>
      <p>
        All users:
        {/* {userList.map((user) =>
          user.name == current.name ? (
            <b>{user.name}</b>
          ) : (
            <span> {user.name}</span>
          )
        )} */}
      </p>
      <div>
        {isLoading ? (
          'Loading...'
        ) : (
          <div>{/* <p> Current user: {current.name}</p> */}</div>
        )}
      </div>
      <button onClick={() => next()}>Next</button>
      <button onClick={() => previous()}>Previous</button>
    </div>
  );
};
