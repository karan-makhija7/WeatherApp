import React from 'react'


const Searchbar = (props) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Destination"
        onChange={e => props.setQuery(e.target.value)}
        value={props.query}
        onKeyPress={props.searchFunc}
      />
    </div>
  )
}

export default Searchbar