import { useState } from "react";

function FlashcardModal({ onClose, handleSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form onSubmit={() => handleSubmit(title, description)}>
        <div className="close">
          <button type="button" id="close" onClick={onClose}>
            <span className="material-symbols-outlined"> close </span>
          </button>
        </div>
        <div className="fieldset">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            required
          />
        </div>
        <div className="submit-container">
          <button type="submit" id="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default FlashcardModal;
