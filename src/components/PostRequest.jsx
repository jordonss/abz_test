import { useEffect, useState } from 'react';
import classes from './PostRequest.module.scss';
import Button from './ui/Button';

export default function PostRequest() {
  const [positions, setPositions] = useState([]);

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
        <form>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='name' id='name' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='phone'>Phone</label>
            <input type='phone' id='phone' required />
            <span>+38 (XXX) XXX-XX-XX</span>
          </div>
          <h3>Select your position</h3>
          {positions.map((position) => (
            <div key={position.id}>
              <input type='radio' name='position' />
              <label htmlFor='position'>{position.name}</label>
            </div>
          ))}
					<div>
						<button type='submit'>Upload</button>
						<input type='file' placeholder='Upload your photo' />
					</div>
					<Button>Sign up</Button>
					<Button>Sign up</Button>
        </form>
      </div>
    </div>
  );
}
