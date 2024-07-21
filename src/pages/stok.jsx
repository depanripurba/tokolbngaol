import Top from "../component/top";
function Stok() {
  return (
    <div className="content-wrapper">
      <Top judul="Stok" />
      {/* isi kontent */}
      <div className="content">
        <div className="col-md-6">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Quick Example</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">File input</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="exampleInputFile"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="exampleInputFile"
                      >
                        Choose file
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.card */}
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Different Styles</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <h4>Input</h4>
              <div className="form-group">
                <label htmlFor="exampleInputBorder">
                  Bottom Border only <code>.form-control-border</code>
                </label>
                <input
                  type="text"
                  className="form-control form-control-border"
                  id="exampleInputBorder"
                  placeholder=".form-control-border"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputBorderWidth2">
                  Bottom Border only 2px Border{" "}
                  <code>.form-control-border.border-width-2</code>
                </label>
                <input
                  type="text"
                  className="form-control form-control-border border-width-2"
                  id="exampleInputBorderWidth2"
                  placeholder=".form-control-border.border-width-2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputRounded0">
                  Flat <code>.rounded-0</code>
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="exampleInputRounded0"
                  placeholder=".rounded-0"
                />
              </div>
              <h4>Custom Select</h4>
              <div className="form-group">
                <label htmlFor="exampleSelectBorder">
                  Bottom Border only <code>.form-control-border</code>
                </label>
                <select
                  className="custom-select form-control-border"
                  id="exampleSelectBorder"
                >
                  <option>Value 1</option>
                  <option>Value 2</option>
                  <option>Value 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelectBorderWidth2">
                  Bottom Border only{" "}
                  <code>.form-control-border.border-width-2</code>
                </label>
                <select
                  className="custom-select form-control-border border-width-2"
                  id="exampleSelectBorderWidth2"
                >
                  <option>Value 1</option>
                  <option>Value 2</option>
                  <option>Value 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelectRounded0">
                  Flat <code>.rounded-0</code>
                </label>
                <select
                  className="custom-select rounded-0"
                  id="exampleSelectRounded0"
                >
                  <option>Value 1</option>
                  <option>Value 2</option>
                  <option>Value 3</option>
                </select>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* Input addon */}
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Input Addon</h3>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <h4>With icons</h4>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-check" />
                  </span>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign" />
                  </span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="fas fa-ambulance" />
                  </div>
                </div>
              </div>
              <h5 className="mt-4 mb-2">With checkbox and radio inputs</h5>
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <input type="checkbox" />
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  {/* /input-group */}
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <input type="radio" />
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  {/* /input-group */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
              <h5 className="mt-4 mb-2">With buttons</h5>
              <p>
                Large: <code>.input-group.input-group-lg</code>
              </p>
              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="#">Action</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Another action</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Something else here</a>
                    </li>
                    <li className="dropdown-divider" />
                    <li className="dropdown-item">
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                {/* /btn-group */}
                <input type="text" className="form-control" />
              </div>
              {/* /input-group */}
              <p>Normal</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className="btn btn-danger">
                    Action
                  </button>
                </div>
                {/* /btn-group */}
                <input type="text" className="form-control" />
              </div>
              {/* /input-group */}
              <p>
                Small <code>.input-group.input-group-sm</code>
              </p>
              <div className="input-group input-group-sm">
                <input type="text" className="form-control" />
                <span className="input-group-append">
                  <button type="button" className="btn btn-info btn-flat">
                    Go!
                  </button>
                </span>
              </div>
              {/* /input-group */}
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* Horizontal Form */}
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Horizontal Form</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form className="form-horizontal">
              <div className="card-body">
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-2 col-sm-10">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-info">
                  Sign in
                </button>
                <button type="submit" className="btn btn-default float-right">
                  Cancel
                </button>
              </div>
              {/* /.card-footer */}
            </form>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  );
}

export default Stok;
