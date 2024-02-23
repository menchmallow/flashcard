import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FlashcardModal from "./components/FlashcardModal";
import CardList from "./components/Card";
import { NoCard, SingleCard } from "./components/Card";

const cardData = JSON.parse(localStorage.getItem("card"));

let cardInfo = cardData ? cardData : [];

const generateId = (title, description) => {
  let char = [];

  const titleChar = title.split("")[0];
  const descriptionChar = description.split("")[0];
  char.push(titleChar);
  char.push(descriptionChar);

  const id = `${char.join("")}-${Math.random()}`;

  return id;
};

function App() {
  const [card, setCard] = useState(cardData ? cardData : []);
  const [showAll, setShowAll] = useState(false);
  const [singleCard, setSingleCard] = useState(card);

  useEffect(() => {
    const searchInput = document.getElementById("input");

    const enterKey = (e) => {
      if (e.key === "Enter") {
        handleSearch(searchInput.value);
      }
    };

    searchInput.addEventListener("keydown", enterKey);
  }, []);

  const toggleHide = () => {
    const container = document.getElementById("container");
    const modal = document.getElementById("modal");

    container.classList.toggle("hide");
    modal.classList.toggle("hide");
  };

  const toggleMenu = () => {
    return document.getElementById("menu").classList.toggle("hide-menu");
  };

  const onClose = () => {
    const container = document.getElementById("container");
    const modal = document.getElementById("modal");

    container.classList.toggle("hide");
    modal.classList.toggle("hide");
  };

  const handleSubmit = (title, description, color) => {
    cardInfo.push({
      id: generateId(title, description),
      title: title,
      description: description,
    });
    setCard(cardInfo);
    localStorage.setItem("card", JSON.stringify(card));
  };

  const handleSearch = (title) => {
    const filteredCard = card.filter(
      (cardTitle) => cardTitle.title.toLowerCase() === title.toLowerCase()
    );

    if (filteredCard.length === 0) {
      return alert("Card not found :(");
    } else {
      setSingleCard(filteredCard);
      setShowAll(false);
    }
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const onFlashcardClick = (id) => {
    const mapped = card.map((obj) => obj);
    const filtered = mapped.filter((obj) => {
      return obj.id === id;
    });

    setShowAll(false);
    setSingleCard(filtered);
  };

  const search = () => {
    document.getElementById("input").classList.toggle("hide");
    document.getElementById("search-btn").classList.toggle("hide");
    document.getElementById("menu-btn").classList.toggle("hide-menu");
  };

  // FIX THIS FNDHFJDIJFPOD
  const deleteCard = (id) => {
    const filteredData = card.map((obj) => obj).filter((obj) => obj.id !== id);
    cardInfo = filteredData;
    setCard(cardInfo);
    localStorage.setItem("card", JSON.stringify(card));
  };

  return (
    <div className="App">
      <div id="modal" className="hide">
        <FlashcardModal onClose={onClose} handleSubmit={handleSubmit} />
      </div>
      <div id="container">
        <Nav
          onToggle={toggleHide}
          handleSearch={handleSearch}
          handleShowAll={handleShowAll}
          onSearch={search}
          toggleMenu={toggleMenu}
        />
        <div className="card-container">
          {card.length === 0 ? (
            <NoCard toggleModal={toggleHide} />
          ) : showAll ? (
            <CardList
              card={card}
              onCardClick={onFlashcardClick}
              onDelete={deleteCard}
            />
          ) : (
            <SingleCard card={singleCard} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
