import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';

const CharacterCard = ({ character = {} }) => {
  const [skills, setSkills] = useState([])
  const [allSkills, setAllSkills] = useState([])
  useEffect(() => {
    fetch(`/api/skills`)
      .then(res => res.json())
      .then(skills => setSkills(skills))
  }, [])
  useEffect(() => {
    character.skills = character.skills ?? []
    const skillsFlatted = skills.map(skill => skill.name)
    const allSkillsMerged = [...new Set([...skillsFlatted, ...character.skills])]
    setAllSkills(allSkillsMerged.map(skill => {
      const owned = character.skills.includes(skill)
      const inSkills = skillsFlatted.includes(skill)
      const a = {
        name: skill,
        owned: owned && inSkills,
        special: owned && !inSkills,
      }
      return a
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
          {allSkills.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
