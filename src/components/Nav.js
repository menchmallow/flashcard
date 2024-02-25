import { useState } from "react";

function Nav({
  onToggle,
  handleSearch,
  handleShowAll,
  onSearch,
  toggleMenu,
  colorPicker,
}) {
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
        <div className="color-picker-container">
          <label htmlFor="color-picker">Flashcard color: </label>
          <select
            id="color-picker"
            onChange={(e) => {
              colorPicker(e.target.value);
              toggleMenu();
            }}
          >
            <option value="#e7e7e7">Light gray (default)</option>
            <option value="#ffb3ba">Pastel-red</option>
            <option value="#ffcce7">Pink</option>
            <option value="#97d7fc">Light blue</option>
            <option value="#8c75ff">Purple</option>
            <option value="#b7c297">Sage green</option>
          </select>
        </div>
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
