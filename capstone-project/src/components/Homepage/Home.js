import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import missingcat from '../../images/missingcat.png';
import logo from '../../images/TodoPursuit.png';
import cat from '../../images/white-cat-expression-stand.png';
import './Home.css';

export default function Home() {

  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    {
      setFading(true);
      setTimeout(()=> {
        history.push('/login')
      },1000)
    }
  }

  return (
    <>
      {/* ternary operator allow us to initialize an animation when fading = true */}
      <div className={`level1body ${fading ? 'fade-out' : ''}`}>
        <div className='homeBody'>
          <div className="poster">
            <img src={missingcat}  alt='Missingcat' id='cat'></img>
            <button className="start" onClick={handleNextText}>FIND TODO</button>
          </div>
          <img src={logo} alt='logo' id='logo'></img>
          <img src={cat} id='catgif' alt='catgif'></img>
        </div>
      </div>
    </>
  )
}