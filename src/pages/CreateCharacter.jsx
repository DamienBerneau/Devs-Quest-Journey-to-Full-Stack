import { useState } from 'react';
import { useNavigate } from 'react-router';

function CreateCharacter() {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('frontend');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && specialization) {
      const character = { name, specialization };
      fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(character),
      })
        .then(res => res.json())
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom du personnage</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="specialization" className="form-label">Spécialisation</label>&nbsp;
              <select className="form-select" id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Créer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCharacter;