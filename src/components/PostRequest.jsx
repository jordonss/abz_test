import { useEffect, useState } from 'react';
import classes from './PostRequest.module.scss';
import Button from './ui/Button';

export default function PostRequest() {
  const [positions, setPositions] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [token, setToken] = useState('');

	useEffect(() => {
    // Fetch token when the component mounts
    const fetchToken = async () => {
      try {
        const tokenResponse = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token ', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json();
          setToken(tokenData.token);
        } else {
          console.error('Error fetching token:', tokenResponse.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
		console.log(token)
    fetchToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      position,
    };

    console.log(formData);

    try {
      const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        {
          method: 'POST',
					body: formData,
          headers: {
            'Token': token,
            'Content-Type': 'application/json',
          },
        }
      );

			if(response.ok) {
				const responseData = await response.json()
				console.log(responseData);
			}
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPosition = async () => {
      const fetchData = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
      );
      const data = await fetchData.json();
      const positions = data.positions;
      setPositions(positions);
      console.log(positions);
    };
    fetchPosition();
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.postSection}>
        <h2>Working with POST request</h2>
        <form onSubmit={handleSubmit} className={classes.postForm}>
          <div className={classes.inputWrapper}>
            <div className={classes.control}>
              <input
                type='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                id='name'
                required
                placeholder='Your name'
              />
            </div>
            <div className={classes.control}>
              {/* <label htmlFor='email'>Email</label> */}
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                required
                placeholder='Email'
              />
            </div>
            <div className={classes.control}>
              <input
                type='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id='phone'
                required
                placeholder='Phone'
              />
              <label htmlFor='phone'>+38 (XXX) XXX-XX-XX</label>
            </div>
          </div>
          <div className={classes.radio}>
            <h3>Select your position</h3>
            {positions.map((position) => (
              <div className={classes.radioPosition} key={position.id}>
                <input
                  type='radio'
                  value={position.name}
                  onChange={(e) => setPosition(e.target.value)}
                  name='position'
                  required
                />
                <label htmlFor='position' className={classes.radioLabel}>
                  {position.name}
                </label>
              </div>
            ))}
          </div>
          <div>
            <button type='submit'>Upload</button>
            <input type='file' placeholder='Upload your photo' />
          </div>
          <Button type='submit'>Sign up</Button>
        </form>
      </div>
    </div>
  );
}
