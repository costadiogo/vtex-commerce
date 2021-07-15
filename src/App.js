import promotion from '../src/services/promotion';
import Card from './components/Cards';
import Header from './components/Header';


function App() {
  return (
    <>
       <Header />
       <Card promotion={promotion} />
    </>
  );
}

export default App;
