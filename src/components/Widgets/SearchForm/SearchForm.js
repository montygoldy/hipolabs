import React from "react";

const SearchForm = () => {
  return (
    <form>
      <input type="text" name="place" className="place" placeholder="I'm looking for" />
      <input type="text" name="location" className="location" placeholder="Istanbul" />
      <button><img src="/image/search.png" alr="search icon" /></button>
    </form>
  )
}

export default SearchForm;