import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
export const LeftSidebar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">

          {/* <li  className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href="/">
              <i className="icon-grid menu-icon" />
              <span className="menu-title">Dashboard</span>
            </a>
          </li> */}


          <li className={router.pathname == "/dashboard" ? "nav-item active" : "nav-item"}>
            <Link href="/dashboard" >
              <a className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Dashboard</span>
              </a>
            </Link>
          </li>

          <li className={router.pathname == "/products" ? "nav-item active" : "nav-item"}>
            <Link href="/products" >
              <a className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Product</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/table" ? "nav-item active" : "nav-item"}>
            <Link href="/table" >
              <a className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Table</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/table2" ? "nav-item active" : "nav-item"}>
            <Link href="/table2" >
              <a className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Table 2</span>
              </a>
            </Link>
          </li>

          <li className={router.pathname == "/form" ? "nav-item active" : "nav-item"}>
            <Link href="/form" >
              <a className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Form</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
