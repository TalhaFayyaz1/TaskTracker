import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header=({title, onAdd,showAdd}) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color = {showAdd ? 'black' : 'green'} text={showAdd ? 'Add' : 'Close'}
       onClick={onAdd} />
    </header>
  );
}

export default Header

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
