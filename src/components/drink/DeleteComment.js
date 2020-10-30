import React, {useState}  from 'react';
import firebase from 'firebase.js';
import 'firebase/firestore';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import {useHistory} from "react-router-dom";
import Modal from 'react-modal';
import styles from 'styles/comments.module.css'

function DeleteComment(props){
  let db = firebase.firestore();
  const [modalIsOpen,setIsOpen] = useState(false);
  let history = useHistory();
  Modal.setAppElement('#root');
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function deleteComment(){
    db.collection('comments').doc(props.commentId).delete()
    .catch(function() {
      history.push('/error');
    });
    closeModal();
  }

  return(
    <div>
    <button className={styles.deleteButton} onClick={openModal}><RiDeleteBin5Fill/></button>
    <Modal
      isOpen={modalIsOpen}
      className={styles.modal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className={styles.modalMessage}>Are you sure you want to delete this comment?</div>
      <div className={styles.modalButtonsContainer}>
        <button className={styles.modalCloseButton} onClick={closeModal}>close</button>
        <button className={styles.modalDeleteButton} onClick={deleteComment}>delete</button>
      </div>
    </Modal>
  </div>
  )
}

export default DeleteComment;
