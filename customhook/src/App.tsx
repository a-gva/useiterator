import './App.css';
import { IteratorTest } from './IteratorTest';

function App() {
  return (
    <div className='App'>
      <p>
        1. Create a Custom ReactHook to fetch users from an API
        (https://randomuser.me/api/) and display their picture and name on the
        page one. <br />
        2 It must return the list of users, the current user, a function to
        fetch the next user and function to move back to the previous user
        <br />3 Test the Custom ReactHook in the index.tsx
      </p>
      <h1 className='text-3xl font-bold underline'>useIterator Project</h1>
      <IteratorTest />
    </div>
  );
}

export default App;
