import styles from "./styles.module.css";
import { TOTAL_PAGES } from "../../constants/constants";

const Pagination = ({
//   totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(TOTAL_PAGES)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= TOTAL_PAGES}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
