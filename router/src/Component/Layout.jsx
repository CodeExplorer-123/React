import React from 'react'
import { Link } from 'react-router-dom';

const Layout = () => {
 return (
    <div>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/blogs">BLOG</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Layout