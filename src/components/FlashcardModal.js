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
          <div className="color-picker-container">
            <label htmlFor="color-picker">Color: </label>
            <select name="light-gray" id="color-picker">
              <option name="#e7e7e7">Light gray (default)</option>
              <option name="#ffb3ba">Pastel-red</option>
              <option name="#ffcce7">Pink</option>
              <option name="#97d7fc">Light blue</option>
              <option name="#8c75ff">Purple</option>
              <option name="#b7c297">Sage green</option>
            </select>
          </div>
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
