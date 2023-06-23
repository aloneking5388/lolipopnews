import { FaEnvelope, FaHeadphones, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
         <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/footerlogo.png' alt='' />
            <p>Lolipop News is best news website news with fun is we are slogan complete news Avery day with fun</p>
            <FaEnvelope />
            <span> lolipopnews028@gmail.com </span> <br />
            <FaHeadphones />
            <span> +91 6356001885</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved | 2021 lolipop new</p>
          <p>
            made with <FaHeart className='icone' /> by Alone King
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer