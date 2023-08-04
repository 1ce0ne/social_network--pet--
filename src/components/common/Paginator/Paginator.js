import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ portionSize = 10, ...props }) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(1);
          }}
        >
          &lt;&lt;
        </button>
      )}
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              key={p - 1}
              className={
                styles.pageNumber +
                ' ' +
                (props.currentPage === p ? styles.selectedPage : '')
              }
              onClick={(e) => {
                props.onPageChanged(p);
                props.setCurrentPage(p);
              }}
            >
              {p + ' '}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionCount);
          }}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default Paginator;
