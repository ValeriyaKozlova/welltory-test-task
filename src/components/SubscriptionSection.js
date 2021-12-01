import React, { useState } from 'react'
import { subscriptions } from '../data/subscriptions'
import Button from './Button'
import SubscriptionCard from './SubscriptionCard'
import logo from './svg/logo.svg';

export default function SubscriptionSection() {
  const [selectedSubs, setSelectedSubs] = useState('Annual')
  const toggleSubs = (sub) => {
    setSelectedSubs(sub)
  }
  return (
    <section className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Take better care of yourself every day</h1>
      <div className="sub-wrapper">
        {
          subscriptions.map(sub => {
            return <SubscriptionCard card={sub} key={sub._id} selectedSubs={selectedSubs === sub.title} toggleSubs={toggleSubs} />
          })
        }
      </div>
      <Button title="continue" className="col-3 gradient" />
      <p className="font-s">No commitments. Cancel anytime</p>
    </section>
  )
}
