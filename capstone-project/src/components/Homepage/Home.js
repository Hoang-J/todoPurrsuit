
import missingcat from '../../images/missingcat.png'
import logo from '../../images/TodoPursuit.png'
import './Home.css'
import Play from '../../images/play.png'
import { useHistory } from 'react-router-dom'
function Home() {
  const history = useHistory()
  const play = () => {
    history.push('/login')
  }
  return (
    <>
    <div className='homeBody'>
      <img src={missingcat}  alt='Missingcat' id='cat'></img>
      <img src={logo} alt='logo' id='logo'></img>
      <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjFxdThhNGhpend3dDI3ODR4Y3NsNGRhZjB5dWpkM3V0cHZ4cmZxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C3ADmBThxaNdS/giphy.gif' id='catgif' alt='catgif'></img>
      <div className='playScreen'></div>
      <img onClick={play} id='play' src={Play}></img>
    </div>

    </>
  )
}

export default Home