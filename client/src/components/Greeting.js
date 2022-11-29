
import {useState} from 'react'

const Greeting = ({ body }) => {
  const [message, setMessage] = useState('');
  console.log(body.hasOwnProperty('user'));
  return (
    <div>
      {body !== undefined && body.hasOwnProperty('user')
        ? `Hi, ${JSON.stringify(body)}`
        : `You're not logged in`}
    </div>
  );
};

export default Greeting;