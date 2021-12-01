import React from 'react'

export default function SubscriptionCard({ card, toggleSubs, selectedSubs }) {
  const { title, old_price, price, off, info } = card
  return (
    <div onClick={() => toggleSubs(title)} className={`subscription_card ${title.toLowerCase()} ${selectedSubs ? "selected" : ""}`}>
      <div className="cart-wrapper-price">
        <h2>{title}</h2>
        <div className="price">
          {price}
        </div>
        <div className="old-price">
          {old_price}
        </div>
      </div>
      <div className="off-wrapper">
        <div className="off">{off}</div>
      </div>
      <div className="info">{info}</div>
    </div>
  )
}
