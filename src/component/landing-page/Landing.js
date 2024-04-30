import React from 'react';

import "./Landing.css"

const Landing = () => {


  return (

    <div className="col-10">
      <div className='container'>
        <div className='row justify-content-center'></div>
        {/* Firt nav bar */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="Logo" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Menu
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Item 1</a>
                  <a class="dropdown-item" href="#">Item 2</a>
                  <a class="dropdown-item" href="#">Item 3</a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 search-box">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            <div class="ml-2">
              <button class="btn btn-link"><i class="fas fa-heart"></i></button>
              <button class="btn btn-primary ml-2">Sign In</button>
            </div>
          </div>
        </nav>
        {/* second nav bar */}


      </div>
    </div>
  );
};

export default Landing;
