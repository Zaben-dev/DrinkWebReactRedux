import React, {useState}  from 'react';
import {useParams} from "react-router-dom";
import styles from 'styles/addComment.module.css';
import firebase from 'firebase.js';
import {useSelector} from 'react-redux';
import 'firebase/firestore';

function AddComment(){
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const userInfo = useSelector(state => state.userInfo.userInfo);
  let {drinkId} = useParams();
  let db = firebase.firestore();

  function Expand(){
    setIsExpanded(true);
    setResultMessage('');
  }

  function handleChange(event){
    setInput(event.target.value); 
  }

  function handleSubmit(){
    db.collection('comments').doc().set({
      drinkId: drinkId,
      uid: userInfo.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: userInfo.displayName,
      content: input
    })
    .then(function() {
        setInput('');
        setIsExpanded(false);
        setResultMessage('Comment added successfully!');
    })
    .catch(function(error) {
        setResultMessage('Something went wrong. Check if your comment has beetween 3 and 2000 characters.');
    });
  }

  function handleKeypress(event){ 
    if (event.which === 13) {  
      handleSubmit();    
    }  
  }

  if (isExpanded === false){
    return(
      <>
        <div className={styles.addCommentContainer}>
          <button className={styles.addCommentButton} onClick={Expand}>add comment</button>
          <br/>
          {resultMessage !=='' &&
            <div className={styles.resultMessage}>
              {resultMessage}
            </div>
          } 
        </div>
      </>  
    )
  }
  else{
    return(
      <div className={styles.addCommentContainer}>
        <div className={styles.displayName}>{userInfo.displayName}:</div>
        <textarea className={styles.textarea} onKeyPress={handleKeypress} value={input} onChange={handleChange} placeholder="comment..."/>
        <button className={styles.addCommentButton} onClick={handleSubmit}>add comment</button>
        {resultMessage !=='' &&
          <div className={styles.resultMessage}>
            {resultMessage}
          </div>
        } 
      </div>
    )
  }
}

export default AddComment;
