import './aboutme.css'
import photo from './nishiths.jpg'
import { Link } from 'react-router-dom'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <h1>Hi there, I'm Nishith</h1>
      <p>I'm a student about to go to my Junior year and I am going to Wilcox highschool</p>
      <p> I enjoy programming and working with computers. In my free time, I like to read and play my guitar. Some sports I play include Cross Country and Track and Field. My dream college is UCLA. 
      </p>
      <nav className="Header-navbar">
      <Link to="/" className="photo">
        <img src={photo} alt="Our fabulous photo" />
        </Link>
        </nav>
        
    </>  
    )
}

// make this component available to be imported into any other file
export default Aboutme