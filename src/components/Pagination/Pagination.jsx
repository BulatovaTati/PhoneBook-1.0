import ReactPaginate from 'react-paginate';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import s from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = ({ selected }) => {
    onPageChange(selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={<FaArrowCircleLeft />}
      nextLabel={<FaArrowCircleRight />}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={totalPages}
      onPageChange={handlePageChange}
      containerClassName={s.pagination}
      pageClassName={s.pagination_btn}
      activeClassName={s.pagination_is_selected}
      previousClassName={s.pagination_btn_prev}
      nextClassName={s.pagination_btn_next}
      disabledClassName={s.pagination_btn_hidden}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
