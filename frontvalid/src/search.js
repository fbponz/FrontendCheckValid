import React, { useState } from 'react';
import { checkValid } from './services/dataService';
import { DataContext } from './contexts/DataContext';
import { useContext } from 'react';

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async () => {
        const data = await checkValid(inputValue);
        console.log('Response data:', data);
        setInputValue('');
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