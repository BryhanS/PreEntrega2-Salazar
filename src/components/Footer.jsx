import GeoLocationsvg from "../Icons/GeoLocationsvg";
import Emailsvg from "../Icons/Emailsvg";
import Phonesvg from "../Icons/Phonesvg";
import Instagramsvg from "../Icons/Instagramsvg";
import Tiktoksvg from "../Icons/Tiktoksvg";

const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <div>
          <h2>Contacto</h2>
          <ul>
            <li>
              <GeoLocationsvg />
              <a href="./contact-us.html">Direccion: jr brasil 1992 - Lima</a>
            </li>
            <li>
              <Emailsvg />
              <a href="mailto:name@prueba.com">info@santamaria.com</a>
            </li>
            <li>
              <Phonesvg />
              <a href="tel:+51999999999">+51999-999-999</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer-center">
        <div>
          <h2>Nosotros</h2>
          <p>
            Somos una panadería peruana con 25 años de experiencia. Nos
            enorgullece ofrecer productos de panadería de la más alta calidad.
            Nuestro compromiso con la excelencia se refleja en cada pan que
            horneamos. ¡Deliciosos sabores y texturas que deleitan a nuestros
            clientes en cada mordisco! Descubre la diferencia de 25 años de
            pasión y dedicación en cada uno de nuestros productos.
          </p>
        </div>
      </section>

      <section className="footer-right">
        <div>
          <label>Suscribete</label>

          <input
            type="text"
            placeholder="!Ingresa tu correo, recibe cupones!"
          />

          <div className="social-icon">
            <Emailsvg />
            <Instagramsvg />
            <Tiktoksvg />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
