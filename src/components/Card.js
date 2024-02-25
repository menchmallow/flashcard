const Card = ({ card, onCardClick, onDelete, color }) => {
  const { id } = card;

  return (
    <div
      id={id}
      className="card"
      onDoubleClick={() => onCardClick(id)}
      style={{ backgroundColor: color }}
    >
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

export const SingleCard = ({ card, color }) => {
  const singleCardObj = card[card.length - 1];

  return (
    <div className="single-card card" style={{ backgroundColor: color }}>
      <h1>{singleCardObj.title}</h1>
      <p>{singleCardObj.description}</p>
    </div>
  );
};

export const NoCard = ({ toggleModal }) => {
  return (
    <div className="single-card card" onClick={toggleModal}>
      <h1>Add card to start!</h1>
    </div>
  );
};

function CardList({ card, onCardClick, onDelete, color }) {
  return card.map((card) => (
    <Card
      key={card.id}
      card={card}
      onCardClick={onCardClick}
      onDelete={onDelete}
      color={color}
    />
  ));
}

export default CardList;
