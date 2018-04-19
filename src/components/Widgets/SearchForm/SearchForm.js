import React from "react";

const SearchForm = () => {
  return (
    <form>
      <input type="text" name="place" placeholder="I'm looking for" />
      <input type="text" name="location" placeholder="Istanbul" />
      <button>Submit</button>
    </form>
  )
}

export default SearchForm;