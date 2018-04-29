import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ price }) => {
  return (
    <div className="bar">
      {price >= 0 && <span className="percentage one" />}
      {price >= 1 && <span className="percentage two" />}
      {price >= 2 && <span className="percentage three" />}
      {price >= 3 && <span className="percentage four" />}
    </div>
  );
};

ProgressBar.propTypes = {
  price: PropTypes.number
};

export default ProgressBar;
