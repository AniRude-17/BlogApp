import React, {useState} from 'react';
import Modal from 'react-modal';
import Popup from './Popup';

const PopUpStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        
      },
      content: {
        margin: 0,
        top: '6%',
        left: '30%',
        right: '30%',
        bottom: '6%',
        position: 'absolute',
        
        border: '2px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        margin: 0,
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none'
      }
};


function PopUpWorker ({Foll,PeopleList}){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <p onClick={setModalIsOpenToTrue} className='follow-link'>{ Foll }</p>

            <Modal isOpen={modalIsOpen} style={PopUpStyles}>
                <button onClick={setModalIsOpenToFalse} className='PopupClose'>X</button>
                <Popup />
            </Modal>
        </>
    )
}
export default PopUpWorker;