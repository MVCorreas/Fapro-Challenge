import React from 'react';
import { MainButton } from '@/app/utility/Buttons';
import styles from './Modal.module.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <p className={styles.modalMessage}>{message}</p>
        <MainButton className={styles.modalButton} onClick={onClose} name='Close'/>
          
      </div>
    </div>
  );
};

export default Modal;
