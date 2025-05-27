import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BMCE College</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Academics</a>
        </li>
        <li>
          <a href="#">Departments</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
