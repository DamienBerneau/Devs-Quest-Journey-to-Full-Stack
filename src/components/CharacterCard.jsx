import React from 'react';

const CharacterCard = ({ character = {} }) => {
  return (
    <div className="card">
      <img src={character.avatar} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Spécialisation : {character.specialization}</p>
        <p className="card-text">Niveau : {character.level}</p>
        <p className="card-text">XP : {character.experience}</p>
        <p className="card-text">Argent : {character.money}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
