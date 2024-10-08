import { Link, useParams} from "react-router-dom";
function Aside() {
  const {name} = useParams();
  console.log(name);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Toko LumbanGaol</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Mangatur Lumbangaol
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <Link to="/" className={"nav-link"}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </Link>
              
            </li>
            <li className="nav-item">
              <Link to="/stok" className={"nav-link"}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Stok
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/billing" className={"nav-link"}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Billing
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Aside;
