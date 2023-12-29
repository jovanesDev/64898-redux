import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav_links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/counter",
      text: "Counter",
    },
  ];

  return (
    <ul style={{display:"flex",gap:50,listStyle:'none',alignItems:'center'}}>
        <h2>Navbar</h2>
      {nav_links.map(({ path, text },index) => (
        <li key={index}>
          <NavLink to={path}>{text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
