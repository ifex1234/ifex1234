<div className="help-container">
<div className="header">
  <div>
    <p>Help Center</p>
    <h3>Hi, how can we help you?</h3>
  </div>
</div>
<Nav className="nav-items" variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link ><NavLink to="placeOrder">Place an Order </NavLink>
      
      <img src={img3} alt="Place an Order" />
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="d-flex border-0" eventKey="link-1">
      Pay for Your Order
      <img src={img2} alt="Pay for Your Order" />
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="d-flex border-0" eventKey="link-2">
      Track your Order <img src={img5} alt=" Track your Order" />
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="d-flex border-0" eventKey="link-3">
      {" "}
      Cancel an Order
      <img src={img1} alt="Cancel an Order" />
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="d-flex border-0" eventKey="link-4">
      {" "}
      Create a Return
      <img src={img4} alt="Create a Return" />
    </Nav.Link>
  </Nav.Item>
</Nav>