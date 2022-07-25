import React, {useState} from 'react';
import Modal from 'react-modal';

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


function PopUpWorkerRegister (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <p onClick={setModalIsOpenToTrue} className='follow-link'>Register</p>

            <Modal isOpen={modalIsOpen} style={PopUpStyles}>
                <button onClick={setModalIsOpenToFalse} className='PopupClose'>X</button>

                <form className='LoginForm'>
                <label htmlFor="UserName" className="UName">UserName</label>
                <input
                type="text"
                className="formInput"
                id="title"
                placeholder="Enter Username email"
                />
                <br />
                <label htmlFor="Pass" className="formLabel">Password</label>

                <input
                type="text"
                className="formInput"
                id="title"
                placeholder="Enter Password"
                />
                <button id="btn">Register</button>

                </form>


            </Modal>
        </>
    )
}
export default PopUpWorkerRegister;