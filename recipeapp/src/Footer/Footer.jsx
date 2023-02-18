import images from '../constants/images';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={images.logo8B} alt="logo" />
      <div className='copyright'>
      <p>Copyright 2023</p>
      <div className='tags'>
      <a href="https://pixabay.com/users/applespc-19095802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7721625">ApplesPC</a>
      <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7721625">Pixabay</a>
      
      </div>
      </div>
    </div>
  )
}

export default Footer
