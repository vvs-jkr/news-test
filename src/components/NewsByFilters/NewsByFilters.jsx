<<<<<<< HEAD
import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
=======
import { getNews } from "../../API/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hocs/useFetch";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

>>>>>>> 332c458 (add latest news)
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />
<<<<<<< HEAD

      <Pagination
=======
      <PaginationWrapper
        top
        bottom
>>>>>>> 332c458 (add latest news)
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
<<<<<<< HEAD
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
=======
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>

>>>>>>> 332c458 (add latest news)
    </section>
  );
};

export default NewsByFilters;
