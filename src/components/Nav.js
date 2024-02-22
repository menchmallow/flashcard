import { useState } from "react";

function Nav({ onToggle, handleSearch, handleShowAll, onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <nav>
      <button id="search" onClick={onSearch}>
        Seach Flashcard
      </button>
      <div className="search-bar">
        <input
          type="text"
          id="input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search by title"
          className="hide"
        />
        <button
          id="search-btn"
          onClick={() => handleSearch(searchValue)}
          className="hide"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      <div className="add-show-btn">
        <button id="show-all-cards" onClick={handleShowAll}>
          Show all cards
        </button>
        <button id="add-card" onClick={onToggle}>
          Add card
        </button>
      </div>
    </nav>
  );
}

export default Nav;
