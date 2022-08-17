import Card from 'components/Card';
import { Fragment, useState } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
const Main = ({ jobs, page, pagination }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const jobParPage = pagination;
  const pagesVisited = pageNumber * jobParPage;

  const displayJobs = jobs
    .slice(pagesVisited, pagesVisited + jobParPage)
    .map((el, key) => (
      <Fragment key={key}>
        <Card key={key} el={el} />
      </Fragment>
    ));

  const pageCount = Math.ceil(jobs.length / jobParPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <main className="main">
      <section className="main__container">
        {page && <div className="main__parag">Offres actuelles</div>}
        <div className="main__cards">{displayJobs}</div>
        <ReactPaginate
          previousLabel={<MdOutlineNavigateBefore />}
          nextLabel={<MdOutlineNavigateNext />}
          pageCount={pageCount}
          onPageChange={changePage}
          breakLabel="..."
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          renderOnZeroPageCount={null}
          containerClassName={'pagination-btns'}
          previousLinkClassName={'prev-btn'}
          nextLinkClassName={'next-btn'}
          disabledClassName={'pagination-disabled'}
          activeClassName={'pagination-active'}
        />
      </section>
    </main>
  );
};

export default Main;
