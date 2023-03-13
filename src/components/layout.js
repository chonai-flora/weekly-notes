import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h2 className="main-heading">
          <Link to="/">
            {title}
            <span style={{
              fontSize: "smaller",
              fontWeight: "lighter"
            }}> - chonai-flora</span>
          </Link>
        </h2>
        <br />
        <p>
          週記です。
          <a href="archives/">こちら</a>も。
        </p>
      </>
    )
  } else {
    header = (
      <Link to="/" className="header-link-home" >{title}</Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr />
      <footer style={{ textAlign: "center" }}>&copy; {new Date().getFullYear()}, Build with Gatsby </footer>
    </div>
  )
}

export default Layout
