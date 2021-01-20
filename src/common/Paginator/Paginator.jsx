import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 20 }) => {
   debugger;
   let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
         {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
               PREV</button>}

         {pages
            .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
               return <span key={page}
                  className={cn({ [styles.selectedPage]: currentPage === page }, styles.pageNumber)}
                  onClick={() => { onPageChanged(page); }}>{page}</span>
            })}

         {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
               NEXT</button>}
      </div>
   )
}

export default Paginator;
