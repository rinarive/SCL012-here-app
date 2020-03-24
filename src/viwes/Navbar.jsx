import React from 'react';
import '../styles/Navbar.css';
import logo from './imagen/logo.jpeg';

class Navbar extends React.Component{
  render(){
    return <div className="Navbar">
        <div className="container-fluid">
       
<a  className="Navbar__brand" href="/">
    <img  className="Navbar__brand-logo" src={logo} alt="logo"/>
    <span className="font-weight-light">Platzi</span>
    <span className="font-weight-bold">Conf</span>
    
</a>
</div>
    </div>;
  }
}

export default Navbar;