import React, {PropTypes} from 'react';

import {Link , IndexLink } from 'react-router';

const Header = () =>{
    return(
      

<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
  <Link to='/' activeClassName='navbar-brand'>React JS</Link>
    {/* <a className="navbar-brand" href="/">React JS</a> */}
  </div>
  <div id="navbar" className="navbar-collapse collapse">
    <ul className="nav navbar-nav">
      <li><IndexLink to='/' activeClassName='active'>Task Configuration</IndexLink></li>
      <li><Link to='/userConfig' activeClassName='active'>User Configuration</Link></li>
      <li><Link to='/tasks' activeClassName='active'>Run Task</Link></li>
      <li><Link to='/audit' activeClassName='active'>Audit</Link></li>
      <li><Link to='/course' activeClassName='active'>Course</Link></li>
     
    </ul>
   
  </div>
</div>
</nav>
    )
}

export default Header;