import React from 'react';

const CharacterCard = ({ character }) => {
  const { avatar, name, level, specialization } = character;

  return (
    <div className="card">
      <img src={avatar} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Niveau: {level}</p>
        <p className="card-text">Spécialisation: {specialization}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
