import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const Paginate = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, idx) => {
        return (
          <Button
            variant="contained"
            sx={{ m: "2px",  }}
            key={idx}
            onClick={() => setCurrentPage(page)}
          > 
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Paginate;

Paginate.propTypes = {
  totalPost: PropTypes.number,
  postPerPage: PropTypes.number,
  setCurrentPage: PropTypes.number,
};
