import { Outlet, Link } from "react-router-dom";

function Container() {
  return (
    <div className="linksContainer">
      <div className="linkBox"><p className="linkText"><Link to="/characters">Characters</Link></p></div>
      <div className="linkBox"><p className="linkText"><Link to="/starships">Starships</Link></p></div>
      <div className="linkBox"><p className="linkText"><Link to="/planets">Planets</Link></p></div>
      <Outlet />
    </div>
  );
}

// function Invoice() {
//   let params = useParams();
//   return <h1>Invoice {params.invoiceId}</h1>;
// }

export default Container;