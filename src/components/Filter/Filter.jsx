import React from 'react'
import './Filter.scss'

const Filter = () => {
  return (
    <div className="filter">
      <h1>Serch Result for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" name='minPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" name='maxPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" name='bedroom' placeholder='any' />
        </div>
        <button>
          <img src="/serch.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter
