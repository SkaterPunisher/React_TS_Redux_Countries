import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Такой страницы не существует
      <Link to='/'>Go to the home page</Link>ƒ
    </div>
  );
};

export default NotFound;
