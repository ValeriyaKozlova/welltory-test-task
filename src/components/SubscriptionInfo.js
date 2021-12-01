import React from 'react'

export default function SubscriptionInfo({ point }) {
  const { title, sub_points } = point
  return (
    <div className="point_wrapper">
      <h3>{title}</h3>
      {sub_points.map(s_p => {
        return <div key={s_p._id} className="grid-container sub_point_wrapper">
          <p>{s_p.content}</p>
          <p>{s_p.free ? <span className="point-yes"></span> : <span className="point-no"></span>}</p>
          <p>{s_p.pro ? <span className="point-yes"></span> : <span className="point-no"></span>}</p>
        </div>
      })}
    </div>
  )
}
