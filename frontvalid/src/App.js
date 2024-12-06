import './styles/App.css';
import React, {useContext} from 'react';
import Search from './search';
import myGif from './Logo2.gif';
import SingleMap from './Map';
import 'leaflet/dist/leaflet.css';
import { DataContext } from './contexts/DataContext';

function App() {
  const data = useContext(DataContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="basic-1/3">
          <img src={myGif} alt="Logo" style={{ display: 'block', margin: '0 auto' }} />
          </div>
          <div className="basic-2/3">
          <Search />
          </div>
          <div className="basic-3/3">
            <label className="text-black">Esta Afectado: </label>
          </div>
        </div>
        <SingleMap />
      </header>
    </div>
  );
}

export default App;
