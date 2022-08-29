import React from "react";
import Header from "../header/Header";
import RightSidebar from "../sidebar/RightSidebar";
import { LeftSidebar } from "../sidebar/LeftSidebar";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="container-scroller">
        {/* Header  */}
        <Header />
        <div className="container-fluid page-body-wrapper">
          {/* right sidebar  */}
          <RightSidebar />
          <LeftSidebar />
          <div className="main-panel">
            <div className="content-wrapper">{children}</div>
            {/* footer  */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
