import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer text-white">
        <hr className='linebreak' />
        <div className="rights">
            <p>&copy; {`${new Date().getFullYear()}`} <span id="currentYear"></span> News Mania | All Rights Reserved</p>
            <p>NewsMania - News App</p>
        </div>
    </section>
  )
}

export default Footer