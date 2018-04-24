import React from 'react';
import Header from "./Widgets/Header/Header";
const NotFound = () => {
  return (
    <div className="pageContainer">
      <Header type="home" />
      <main className="content">
        <div className="notFound">
          <img src="/image/sad-smiley.png" alt="smiley" />
          <h2 className="main-text u-margin-bottom-s">We are unable to process your request!</h2>
        </div>
      </main>
    </div>
  );
}

export default NotFound;