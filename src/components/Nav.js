import { useState } from "react";

function Nav({ onToggle, handleSearch, handleShowAll, onSearch, toggleMenu }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <nav>
      <div className="search-container">
        <button
          id="search"
          onClick={() => {
            onSearch();
          }}
        >
          Search Flashcard
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
      </div>
      <div className="add-show-btn hide-menu" id="menu">
        <button
          id="show-all-cards"
          onClick={() => {
            handleShowAll();
            toggleMenu();
          }}
        >
          Show all cards
        </button>
        <button
          id="add-card"
          onClick={() => {
            onToggle();
            toggleMenu();
          }}
        >
          Add card
        </button>
      </div>
      <div className="toggle-menu" id="menu-btn" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
}

export default Nav;
