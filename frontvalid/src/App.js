import './styles/App.css';
import 'leaflet/dist/leaflet.css';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import MapHandler from './components/ui/Map';

function App() {
  return (
    <div className="App">
        <MainLayout>
          <Home />
        </MainLayout>
    </div>
  );
}

export default App;
