
import '../styles/App.css';
import GetGif from './tag.jsx';
import Navbar from './Navbar';
import SearchGif from './search';

function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <div className="row">
    <div className="col"><GetGif/></div>
    <div className="col"><SearchGif></SearchGif></div>
    </div>
    </div>
    </>
  );
}

export default App;
