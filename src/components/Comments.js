import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DeleteComment from './DeleteComment';
import firebase from '../firebase';
import 'firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {addComment, refreshComments} from '../redux/actions';
import styles from '../styles/comment.module.css'


function Comments(){
  let db = firebase.firestore();
  let {drinkId} = useParams();
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments);
  const userInfo = useSelector(state => state.userInfo.userInfo);

  useEffect(() => {
    const unsubscribe = db.collection('comments').where('drinkId', '==', drinkId)
    .onSnapshot(function (doc){
      dispatch(refreshComments());
      doc.forEach((comment) => {
        if(doc.metadata.hasPendingWrites === false) 
          dispatch(addComment({...comment.data(), commentId: comment.id}));
      })
    });
    return () => unsubscribe();
  },[db, dispatch, drinkId])

  return(
    <>
      {comments.map((comment, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.info}> {comment.name} &nbsp;&nbsp; {new Date(comment.createdAt.toDate()).toLocaleString('en-GB', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} </div>
          {userInfo.uid===comment.uid && <div><DeleteComment commentId={comment.commentId}/></div>}
          <div className={styles.break}></div>
          <div className={styles.content}>{comment.content}</div>
        </div>
      ))}
    </>
  )
}

export default Comments;
