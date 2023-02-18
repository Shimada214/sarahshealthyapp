import images from '../constants/images';
import './About.css';

const About = () => {

  return (
  <div className="container" id='about'>
    <div className="text-section">
      <h3>For my Grandma</h3>
      <h1>Who has the biggest, prettiest, brightest smile ever!</h1>
      <p>Hi Granny, this app is made especially for you, I thought maybe this user friendly keto recipe app could help you on your keto journey. I love you and thank you for always being an inspiration</p>
      <p className='name'>~Shimada</p>
    </div>
    <div className="image-section">
      <img src={images.image1} alt="grandma"/>
    </div>
  </div>
  )
}

export default About;