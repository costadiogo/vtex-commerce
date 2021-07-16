import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/images/close.svg';
import { Container } from './styles';



export function NewTransactionModal({isOpen, onRequestClose}) {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);

    alert('Parabéns!! Email cadastrado com sucesso');
  };

    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar o Modal" />
          </button>
          
          <Container>
            <input 
                value={name}
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                value={email} 
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="text" onClick={handleSubmit} >Cadastrar</button>
          </Container>
      </Modal>
    );
};