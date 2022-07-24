import React, { Component } from 'react'
import {  Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <Link to='/'>Logo.Az</Link>
                </div>
                <div className="col-lg-10 text-end">
                    <Link to='/'>Index</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header