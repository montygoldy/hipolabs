import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ price }) => {
  return (
    <div className="bar">
      {price === 1 && (
        <React.Fragment>
          <span className="percentage one" />
          <span className="percentage two" />
        </React.Fragment>
      )}
      {price === 2 && (
        <React.Fragment>
          <span className="percentage one" />
          <span className="percentage two" />
          <span className="percentage three" />
        </React.Fragment>
      )}
      {price === 3 && (
        <React.Fragment>
          <span className="percentage one" />
          <span className="percentage two" />
          <span className="percentage three" />
          <span className="percentage four" />
        </React.Fragment>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  price: PropTypes.number.isRequired
}

export default ProgressBar;
