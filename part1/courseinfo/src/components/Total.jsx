import PropTypes from "prop-types";

function Total({total}) {
  return (
    <div>
        <p>Number of exercises {total}</p>
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;