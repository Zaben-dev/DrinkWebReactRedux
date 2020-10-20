import React, {useState}  from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Modal from 'react-modal';
import styles from '../styles/comments.module.css'

function DeleteComment(props){
  let db = firebase.firestore();
  Modal.setAppElement('#root');
  const [modalIsOpen,setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function deleteComment(){
    db.collection('comments').doc(props.commentId).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
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
