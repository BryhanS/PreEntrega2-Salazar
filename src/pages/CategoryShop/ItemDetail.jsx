/* eslint-disable react/prop-types */

const ItemDetail = ({ id, nombre, precio, imagen, altinf, cantidad }) => {
  return (
    <div className="card-body">
      <img src={`./img/${imagen}`} alt={altinf} />
      <span>{nombre}</span>
      <span>{id}</span>

      <span>{precio}</span>
      <span>{cantidad}</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eaque
        iure doloremque? Tenetur magni ea ipsa laborum a, voluptate natus? Odit
        rerum consequuntur aperiam doloremque voluptatibus iusto ex saepe
        labore.
      </p>
    </div>
  );
};

export default ItemDetail;
