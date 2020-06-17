import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to <br/> my Design Project</h1>
        <p>I am gonna try to learn as much as possible</p> 
        <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
    
  </div>
)

export default IndexPage
