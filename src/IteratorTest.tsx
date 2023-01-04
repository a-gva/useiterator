// below, iteratorTest.tsx
import { useIterator } from './useIterator';
import { useEffect } from 'react';
import ReactLogo from '../src/assets/react-logo.png';

export const IteratorTest = () => {
  const hookReturn = useIterator('https://randomuser.me/api/');

  const { users, current, isLoading, next, previous, clear } = hookReturn;

  const repoURL = 'https://github.com/a-gva/useiterator/';

  useEffect(() => {}, [current]);

  return (
    <div className='flex flex-col lg:flex-row lg:px-10 w-full bg-neutral-900 gap-10 px-6 min-h-screen '>
      {/* DIV 1 */}
      <div className='lg:w-1/4 lg:mt-12 pt-12 lg:pt-0'>
        <div>
          <img src={ReactLogo} alt='' className='spinning w-12' />
          <h1 className='text-4xl font-bold '>useIterator Hook</h1>
        </div>
        <div className='flex flex-col items-start text-left pt-12 pb-6'>
          <p>
            Custom ReactHook to fetch users from an API and display their
            picture and name. <br />
            It returns the list of users, the current user, a function to fetch
            the next user and function to move back to the previous user.
            <br />
          </p>
          <p>
            Repo: <a href={repoURL}>{repoURL}</a>
          </p>
        </div>

        <div className='flex items-center justify-center gap-1 h-20 pb-2'>
          <button
            className='w-24 h-full border-white border-solid'
            onClick={() => previous()}
          >
            ← Previous
          </button>
          <button
            className='w-24 h-full border border-white border-solid'
            onClick={() => next()}
          >
            → Next
          </button>
          <button
            className='w-24 h-full bg-neutral-700'
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>

        <div className='flex flex-row items-center justify-center bg-neutral-800 rounded-xl w-full h-36 border border-neutral-600 border-solid'>
          {users.length == 0 && (
            <div className='flex text-2xl font-bold w-full h-full justify-center items-center '>
              <h3 className='text-center font-medium text-base'>
                Click 'next' to load a user
              </h3>
            </div>
          )}

          {users.length > 0 && (
            <div className='flex text-2xl font-bold w-full h-full justify-center items-center '>
              <h4 className='text-center text-xl'>Current user</h4>
            </div>
          )}

          {users.length > 0 && (
            <div
              className='flex flex-col items-center w-full h-full pt-6 rounded-tr-xl rounded-br-xl bg-neutral-700
            '
            >
              <img
                src={users[current].picture}
                alt=''
                className='w-16 rounded-full'
              />
              <p className=' py-2 text-center'>{users[current].name}</p>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col bg-neutral-700 mb-8 lg:my-12 w-full lg:w-3/4 rounded-2xl border border-neutral-600 border-solid'>
        <div className='text-2xl font-bold py-6 px-4 bg-neutral-800 rounded-t-2xl'>
          <h3>All users</h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8 py-6  '>
          {users.length == 0 && <p>Click 'next'</p>}
          {users.map((user, index) => (
            <div
              key={index}
              id={index.toString()}
              className='flex flex-col shadow-2xl items-center justify-center pt-8 pb-4 bg-neutral-600 rounded-lg gap-2'
            >
              <div>
                <img
                  src={user.picture}
                  alt=''
                  className='w-20 rounded-full shadow-2xl'
                />
              </div>
              <p className='py-4 text-sm text-neutral-100 font-bold text-center'>
                {user.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// border-solid border-red-600 border-2
