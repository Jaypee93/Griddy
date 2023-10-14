import React from 'react'
import './Jeanette.css'
import jeanetteImg from '../../assets/image-jeanette.jpg'

const Jeanette = () => {
  return (
    <div className="Jeanette-container">
      <div className="Jeanette-about">
        <img src={jeanetteImg} alt="Jeanette" className="Jeanette-img" />
        <div className="Jeanette-intro">
          <p>Jeanette Harmon</p>
          <p>
            <small className="Jeanette-small">Verified Graduate</small>
          </p>
        </div>
      </div>
      <div className="Jeanette-comment">
        <h1>The team was very supportive and kept me motivated</h1>
      </div>
      <div className="Jeanette-quote">
        <h3>
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </h3>
      </div>
    </div>
  )
}

export default Jeanette