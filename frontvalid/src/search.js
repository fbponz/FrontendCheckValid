import React, { useState } from 'react';
import { DataContext } from './DataContext';
import { useContext } from 'react';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState({ isAffected: false , latitude: '', longitude: '' });

    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:3000/CheckValid', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ streetName: inputValue }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Response data:', data);
            setData(data);
        } else {
          console.error('Error submitting data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return (
        <div className="flex items-center space-x-4">
          <input
            className='border-2 border-black rounded-full px-2 py-1 text-black'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-orange-500 text-white rounded-full px-4 py-1" onClick={handleSubmit}>Buscar</button>
      </div>
    );
  }

  export default Search;