import React from 'react'
import { points } from '../data/points'
import Button from './Button'
import SubscriptionInfo from './SubscriptionInfo'

export default function SubscriptionsInfoSection() {

  return (
    <section className="container section-info">
      <h2 className="col-12">Choose the best plan for you</h2>
      <div className="info-wrapper">
        <div className="grid-container header-info">
          <p>What you get</p>
          <p className="d-s-none">For free</p>
          <p className="d-md-none">Free</p>
          <p className="pro d-md-none">Pro</p>
          <p className="pro d-s-none">in Pro</p>
        </div>
        {points.map(point => {
          return <SubscriptionInfo key={point._id} point={point} />
        })}
      </div>
      <div>
        <Button title="go with the free version" className="" />
        <Button title="upgrade now" className="gradient" />
      </div>
    </section>
  )
}
