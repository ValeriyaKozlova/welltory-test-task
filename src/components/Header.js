import React from 'react'
import heart from './svg/heart.svg';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img src={heart} className="App-logo" alt="heart" />
          <span>Welltory</span>
        </div>
      </div>
    </header>
  )
}
