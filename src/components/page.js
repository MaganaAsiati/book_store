import React from 'react';
import { Link } from "react-router-dom";

function Page() {
  return ( 
    <div>
    <header>
    <h1> ASSIA TITLE</h1>
    <nav class="nav-bar">
      <Link to="/">assia</Link>
      <Link to="/ass">assia</Link>
      <Link to="/about">assia</Link>
    </nav>
    </header>
    </div> 
  );
}

export default Page;