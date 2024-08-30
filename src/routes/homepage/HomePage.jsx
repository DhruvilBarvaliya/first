import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tenetur asperiores odit perspiciatis ad, illo, iusto quam praesentium voluptatibus, quia necessitatibus quidem quasi. Distinctio ducimus provident esse velit laudantium aliquam.</p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div><div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
