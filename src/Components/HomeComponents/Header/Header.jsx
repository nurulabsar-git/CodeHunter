import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Header.css';
const customStyles = {
  content: {
    top: '50%',
    left: '155px',
    right: 'auto',
    width: '310px',
    height: '100vh' ,
    boxShadow: '6px 6px 12px gray',
    borderRadius: '8px',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Header = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }


    return (
        <div>
        <div style={{borderRadius: '5px', padding: '5px'}}> <button onClick={openModal} style={{borderRadius: '8px'}} ><i style={{ width: '50px'}} className="fa fa-align-justify" aria-hidden="true"></i></button></div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <div style={{float: 'left', paddingBottom: '40px', paddingTop: '0'}}>
         <button  onClick={closeModal} style={{ border: 'none', paddingTop: '1px', textShadow: '2px 4px white'}}><i className="fa fa-times mh-100 w-100 h-100" aria-hidden="true"></i></button>
         </div>
          <div style={{marginTop: '50px'}}>
          <form>
            <Link to="/courses" className="text-decorations">
            <li className="common-feature">Courses</li>
            </Link>
            <Link to="/playground" className="text-decorations">
            <li className="common-feature">Code Playground</li>
            </Link>
            <Link to="/discuss" className="text-decorations">
            <li className="common-feature">Discuss</li>
            </Link>
            <Link to="/courses" className="text-decorations">
            <li className="common-feature">Courses</li>
            </Link>
            <Link to="/getPro" className="text-decorations">
            <li className="common-feature">Get Pro</li>
            </Link>
            <Link to="/login" className="text-decorations" style={{display: 'flex', justifyContent: 'space-around'}}>
            <li  className="common-feature">LogIn</li>
            <li  className="common-feature">Register</li>
            </Link>
          </form>
          </div>
        </Modal>
    </div>
    );
};

export default Header;