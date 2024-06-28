import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(0)


  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);   
  
    return () => {
      window.removeEventListener('scroll', navbarScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navbarScroll = () => {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      setNavHeight(document.querySelector('.navbar').offsetHeight);
      document.body.style.paddingTop = navHeight + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    } 
  }
  

  return (
    <div>
      <header>
        <div className="py-2" style={{backgroundColor:"rgb(17 1 58)"}}>
          <div className='container text-center text-white'>
            <Link className="navbar-brand" to="/"><p className="h2">NewsMania</p></Link>

          </div>
        </div>

        <nav id="navbar_top" className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(1 6 86 / 98%)", }}>
          <div className="container">
            <Link className="navbar-brand text-white" to="/"><p className='h3'>NewsMania</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{backgroundColor:"white"}} data-bs-target="#main_nav">
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar