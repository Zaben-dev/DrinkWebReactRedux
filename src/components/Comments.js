import React, {useEffect} from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {addComment, refreshComments} from '../redux/actions';
import styles from '../styles/comment.module.css'

function Comments(props){
  let db = firebase.firestore();
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments);

  useEffect(() => {
    const unsubscribe = db.collection('comments').where('drinkId', '==', props.drinkId)
    .onSnapshot(function (doc){
      dispatch(refreshComments());
      doc.forEach((comment) => {
        if(doc.metadata.hasPendingWrites === false) 
          dispatch(addComment(comment.data()));
      })
    });
    return () => unsubscribe();
  },[db, dispatch, props.drinkId])

  return(
    <>
      {comments.map((comment, index) => (
        <div className={styles.comment} key={index}>
          <div className={styles.info}> {comment.name} &nbsp;&nbsp; {new Date(comment.createdAt.toDate()).toLocaleString('en-GB', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} </div>
          <div className={styles.content}>{comment.content}</div>
        </div>
      ))}
    </>
  )
}

export default Comments;
