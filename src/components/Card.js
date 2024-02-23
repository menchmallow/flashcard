const Card = ({ card, onCardClick, onDelete }) => {
  const { id } = card;

  return (
    <div id={id} className="card" onDoubleClick={() => onCardClick(id)}>
      <div className="card-info">
        <h1>{card.title}</h1>
        <p>{card.description}</p>
      </div>
      <div className="del-btn-container">
        <button className="del-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export const SingleCard = ({ card }) => {
  const singleCardObj = card[card.length - 1];

  return (
    <div className="single-card card" id="idk">
      <h1>{singleCardObj.title}</h1>
      <p>{singleCardObj.description}</p>
    </div>
  );
};

export const NoCard = () => {
  return (
    <div className="card">
      <h1>Add card to start!</h1>
    </div>
  );
};

function CardList({ card, onCardClick, onDelete }) {
  return card.map((card) => (
    <Card
      key={card.id}
      card={card}
      onCardClick={onCardClick}
      onDelete={onDelete}
    />
  ));
}

export default CardList;
