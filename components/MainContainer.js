import React from "react";
import Link from 'next/link'
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs" + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <div className="navbar">
        <Link href="/">
          <span className="navbar__link">Main page</span>
        </Link>
        <Link href="/users">
          <span className="navbar__link">Users page</span>
        </Link>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }

          .navbar__link {
            margin-right: 10px;
            padding: 10px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer;
