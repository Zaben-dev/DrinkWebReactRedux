import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCommentsOrder, commentsOrderTypes} from 'redux/actions';
import styles from 'styles/comments.module.css';

function SelectCommentsOrder(){
  const dispatch = useDispatch();
  const order = useSelector(state => state.commentsOrder);

  function handleChange(event) {
    dispatch(setCommentsOrder(event.target.value)); 
  }

  return(
    <div className={styles.selectOrder}>
      <select value={order} onChange={handleChange}>   
        <option value={commentsOrderTypes.NEWEST_TO_OLDEST}>newest to oldest</option>
        <option value={commentsOrderTypes.OLDEST_TO_NEWEST}>oldest to newest</option>
      </select>
    </div>
  );
}

export default SelectCommentsOrder;
