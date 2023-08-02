import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CharacterCard from '../components/CharacterCard'

function SelectCharacter() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('/api/characters')
      .then(res => res.json())
      .then(characters => setCharacters(characters))
  }, [])

  return (
    <div className="container">
      <div className="row">
        {characters.map((char, index) => (
          <div key={index}
            className="col-lg-3 col-md-6 col-sm-12 cursor-pointer mb-3"
            onClick={() => navigate(`/character/${char.id}`)}>
            <CharacterCard character={char} />
          </div>
        ))}
        <div
          className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center cursor-pointer mb-3"
          onClick={() => navigate("/create-character")}>
          <div className="card h-100 w-100 d-flex align-items-center justify-content-center">
            <span className="display-1">+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectCharacter