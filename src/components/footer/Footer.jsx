import React from "react";
import Logo from '../../assets/img/magic-of-money-logo.png'
import './Footer.css'

const Footer = () => (
    <footer  id='footer'>
          <div className='footer-wrap row'>
                  <div className='col'>
                      <ul className='footer-links'>
                          <li><a href='#home'>Home</a></li>
                          <li><a href='#about'>About</a></li>
                          <li><a href='#tokenomic'>Tokenomic</a></li>
                          <li><a href='#roadmap'>Roadmap</a></li>
                      </ul>
                  </div>
                  <div className='col'>
                      <img src={Logo} className='footer-logo' alt='boodogy'/>
                  </div>
                  <div className='col'>
                          <ul className='footer-links'>
                              <li><a href='https://pancakeswap.finance/swap' target="_blank" rel="noopener noreferrer">Telegram</a></li>
                              <li><a href='https://twitter.com/magicofmoneyy?s=21&t=sF765HlqwyFHJGGi3K_iwQ' target="_blank" rel="noopener noreferrer">Twitter</a></li>
                              <li><a href='https://m.facebook.com/?_rdr#!/profile.php?id=100080458644687' target="_blank" rel="noopener noreferrer">Facebook</a></li>
                              <li><a href='https://pancakeswap.finance/swap' target="_blank" rel="noopener noreferrer">PancakewSwap</a></li>
                              <li><a href='https://github.com/magicofmoney' target="_blank" rel="noopener noreferrer">Github</a></li>
                              <li><a href='https://medium.com/@magicofmoneytoken' target="_blank" rel="noopener noreferrer">Medium</a></li>
                              <li><a href='https://www.reddit.com/u/MagicOfMoney/?utm_source=share&utm_medium=ios_app&utm_name=iossmf' target="_blank" rel="noopener noreferrer">Reddit</a></li>
                          </ul>
                  </div>
          </div>
          <div className='footer-copyright'>
              <p>© 2022 <a href="#home">MAGIC OF MONEY</a>. All rights reserved.</p>
          </div>
    </footer>
  );
  
  export default Footer;