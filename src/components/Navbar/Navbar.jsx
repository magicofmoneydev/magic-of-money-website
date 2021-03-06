import React, { Component } from 'react'
import './Navbar.css'
import { RiMenuLine } from 'react-icons/ri';
import logo from '../../assets/img/magic-of-money-logo.png';

 class Navbar extends Component {
    state = {
        mobileMenuVisibility: false
    }
    onClickToggle = () => {
        this.setState({
            mobileMenuVisibility: !this.state.mobileMenuVisibility
        })
    }
  render() {
    return (
        <section id="home">
            <header className='desktop-header'>
                <div className="container">
                <div className="left">
                    <a href="#home" className="logo">
                        <img src={logo} alt="logo" className='nav-logo'/>
                    </a>
                </div>
                <div className="right">
                    <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tokenomic">Tokenomic</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="https://pancakeswap.finance/swap" className='buy-link' target="_blank" rel="noopener noreferrer">BUY $MOM</a></li>
                    </ul>
                    </nav>
                </div>
                </div>
            </header>
            <header className='mobile-header'>               
                       <div className='logo-wrap'>
                            <a href="#home" className="logo">
                                <img src={logo} alt="logo" className='nav-logo'/>
                            </a>
                       </div>
                        <div className="toggle-wrap">
                            <a href='#home'>
                                <RiMenuLine className='toggle-icon' onClick={this.onClickToggle} />
                            </a>
                        </div>
            </header>
            {this.state.mobileMenuVisibility ?
                 <div className='container'>
                 <div className='hamburger-menu'>
                     <ul>
                         <li><a href="#home">Home</a></li>
                         <li><a href="#about">About</a></li>
                         <li><a href="#tokenomic">Tokenomic</a></li>
                         <li><a href="#roadmap">Roadmap</a></li>
                         <li><a href="#team">Team</a></li>
                         <li><a href="https://pancakeswap.finance/swap" className='buy-link' target="_blank" rel="noopener noreferrer">BUY $MOM</a></li>
                     </ul>
                 </div>
             </div>
             : null}
           
        </section>
    )
  }
}
export default Navbar;