/* eslint-disable react/prop-types */

const ItemDetail = ({nombre, precio, imagen, altinf, cantidad }) => {
  return (
    <div className="container">
      <div className="d-flex m-5">
        <img src={`../img/${imagen}`} alt={altinf} />

        <div className="m-5 p-5">
          <h1 className="mb-5">{nombre}</h1>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eaque iure doloremque? Tenetur magni ea ipsa laborum a, voluptate
            natus? Odit rerum consequuntur aperiam doloremque voluptatibus iusto
            ex saepe labore.
          </p>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            eaque iure doloremque? Tenetur magni ea ipsa laborum a, voluptate
            natus? Odit rerum consequuntur aperiam doloremque voluptatibus iusto
            ex saepe labore.
          </p>
          <div>
            <span>{precio}</span>
            <span>{cantidad}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
