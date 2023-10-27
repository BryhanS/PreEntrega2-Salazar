import ItemListContainer from "./CategoryShop/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsTop } from "../asyncmock";

const Home = () => {
  const [productsTop, setProductsTop] = useState([]);

  useEffect(() => {
    getProductsTop(4).then((res) => setProductsTop(res));
  }, []);

  return (
    <main>
      <section id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/front-img-1.png"
              className="d-block w-100"
              alt="imagen-1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/front-img-2.png"
              className="d-block w-100"
              alt="imagen-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/front-img-3.png"
              className="d-block w-100"
              alt="imagen-3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>

      <section className="product-section">
        <ItemListContainer onProducts={productsTop}>
          lo mas vendido
        </ItemListContainer>
      </section>

      <section className="section-video">
        <iframe
          src="https://www.youtube.com/embed/3VD6bbfxzME"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <p>
          Durante 25 años, la panadería Santa María ha sido el epítome del
          cariño, profesionalismo y calidad en la producción de panes. Con un
          amor inquebrantable por su oficio, su equipo de panaderos selecciona
          cuidadosamente los ingredientes más frescos y los transforma en
          auténticas obras maestras. Cada etapa del proceso, desde el amasado
          hasta el horneado, se lleva a cabo con precisión y dedicación,
          asegurando que cada pan sea una delicia para los sentidos. La
          reputación de Santa María se basa en su entrega inigualable de
          productos excepcionales que deleitan y satisfacen a los paladares más
          exigentes.
        </p>
      </section>
    </main>
  );
};

export default Home;
