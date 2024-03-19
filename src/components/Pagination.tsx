export interface PaginationProps {
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
    pageQty: number;
}

export const Pagination = ({
    currentPage,
    nextPage,
    prevPage,
    pageQty,
}: PaginationProps): JSX.Element => {
    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={prevPage}>
                Prev
            </button>
            <span>Page: {currentPage}</span>
            <button disabled={currentPage === pageQty} onClick={nextPage}>
                Next
            </button>
        </div>
    );
};
