"use client";

import { SearchManuFacturer } from "./";
import { useState } from "react";

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState('');
  const handleSubmit = () => {};
  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <div className="seachbar__item">
        <SearchManuFacturer 
            manuFacturer={manuFacturer}
            setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
