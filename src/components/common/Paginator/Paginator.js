import styles from './Paginator.module.css';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    // Заглушка
    if (i < 25) pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p - 1}
            className={props.currentPage === p ? styles.selectedPage : ''}
            onClick={(e) => {
              props.onPageChanged(p);
              props.setCurrentPage(p);
            }}
          >
            {p + ' '}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
