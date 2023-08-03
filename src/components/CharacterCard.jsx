import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';

const CharacterCard = ({ character = {} }) => {
  const [skills, setSkills] = useState([])
  const [characterSkills, setCharacterSkills] = useState([])
  useEffect(() => {
    fetch(`/api/skills`)
      .then(res => res.json())
      .then(skills => setSkills(skills))
  }, [])
  useEffect(() => {
    character.skills = character.skills ?? []
    const allSkills = [...new Set([...skills, ...character.skills ?? []])]
    setCharacterSkills(allSkills.map(skill => {
      return {
        name: skill,
        owned: character.skills.includes(skill),
        special: skills.includes(skill),
      }
    }))
  }, [skills, character])
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
      <div className="card-body">
        <div className="card-title">Compétences</div>
        <div className="card-text">
          {skills.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
