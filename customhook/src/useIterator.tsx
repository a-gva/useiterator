// below, useIterator.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';

interface User {
  name: string;
  picture: string;
}

export const useIterator = (url: string) => {
  let [users, setUsers] = useState([]);
  let [index, setIndex] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect: users: ', users);
    console.log('useEffect: Last user added: users[index]: ', users[index]);
    console.log('useEffect: users.length AFTER array update: ', users.length);
  }, [users, index]);

  const fetchUser = async () => {
    setIsLoading(true);
    console.log('Start fetching...');
    await axios(url).then((response) => {
      const { data } = response;
      const { results: userFetched } = data;
      console.log('userFetched: ', userFetched);
      console.log('userFetched[index]: ', userFetched[index]);

      const {
        name: { first, last },
        picture: { thumbnail },
      } = userFetched[0];

      console.log('users.lenght BEFORE array update: ', users.length);
      console.log('current index: ', index);
      setUsers([...users, { name: `${first} ${last}`, picture: thumbnail }]);

      // update user index
      setIndex(index + 1);
    });
  };

  const next = () => {
    fetchUser();
  };

  const previous = () => {
    fetchUser();
  };

  return {
    users,
    currentUser: users[index],
    isLoading,
    next,
    previous,
  };
};

// await fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('data: ', data.results);
//     setUsersList(data.results);
//   });
// console.log('Finished Fetching!');
// setIsLoading(false);
