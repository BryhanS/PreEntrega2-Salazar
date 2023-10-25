/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ItemList = ({ id,nombre, imagen, altinf }) => {
  return (
    <div className="card-body">
      <img src={`./img/${imagen}`} alt={altinf} />
      <span>{nombre}</span>

    <Link to={`/category/${id}`}>
      <button>Ver Detalle</button>
    </Link>
    </div>
  );
};

export default ItemList;
