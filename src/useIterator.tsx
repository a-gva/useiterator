// below, useIterator.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';

interface User {
  name: string;
  picture: string;
}

export const useIterator = (url: string) => {
  let [users, setUsers] = useState<any[]>([]);
  let [current, setCurrent] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('useEffect: users: ', users);
    // console.log('useEffect: Last user added: users[current]: ', users[current]);
    // console.log('useEffect: users.length AFTER array update: ', users.length);
    // console.log('useEffect: current: ', current);
  }, [users, current]);

  const fetchUser = async () => {
    setIsLoading(true);
    // console.log('Start fetching...');
    await axios(url).then((response) => {
      const { data } = response;
      const { results: userFetched } = data;
      // console.log('userFetched: ', userFetched);
      // console.log('userFetched[current]: ', userFetched[current]);

      // destructure userFetched[0] to get first, last name and picture
      const {
        name: { first, last },
        picture: { medium },
      } = userFetched[0];

      // console.log('users.lenght BEFORE array update: ', users.length);
      // console.log('current current: ', current);

      if (users.length == 0) {
        setUsers([...users, { name: `${first} ${last}`, picture: medium }]);
        setCurrent(0);
      } else {
        setUsers([...users, { name: `${first} ${last}`, picture: medium }]);
        setCurrent(users.length);
      }
      setIsLoading(false);
    });
  };

  const previous = () => {
    if (current <= 0) {
      // console.log('No previous user!');
    } else {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    // runs fetch only when current is the last user in the array
    if (current >= users.length - 1) {
      fetchUser();
    } else {
      setCurrent(current + 1);
    }
  };

  const clear = () => {
    setUsers([]);
    setCurrent(0);
  };

  return {
    users,
    current,
    isLoading,
    next,
    previous,
    clear,
  };
};
