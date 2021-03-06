import { useState } from 'react';
import Modal from 'react-modal';
import promotion from '../src/services/promotion';
import promotions from '../src/services/promotions';
import Card from './components/Cards';
import Header from './components/Header';
import { NewModal } from './components/Modal';

Modal.setAppElement('#root');

function App() {
  
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  function handleModalOpen() {
      setIsNewModalOpen(true);


  }

  function handleModalClose() {
      setIsNewModalOpen(false);
  }

  return (
    <>
       <Header />
       <Card 
        promotion={promotion} 
        promotions={promotions} 
        onOpenNewModal={handleModalOpen}

       />
       <NewModal 
        isOpen={isNewModalOpen}
        onRequestClose={handleModalClose}
      />
    </>
  );
}

export default App;
