const ContactUs = () => {
  return (
    <main>
      <section className="form-section">
        <h1>Contactanos</h1>

        <div className="form-container">
          <form>
            <h2>¿tienes alguna pregunta? !Estamos encantados de ayudarte!</h2>

            <div>
              <label for="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label for="telfono">Telefono</label>
              <input
                type="tel"
                name="telefono"
                id="telefono"
                placeholder="Escribe tu telefono"
              />
            </div>

            <div>
              <label for="correo">Correo</label>
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Escribe tu Correo"
              />
            </div>

            <div>
              <label for="mensaje">Mensaje</label>
              <textarea
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>

          <img src="./img/bread-team.png" alt="team" />
        </div>
      </section>

      {/* <section className="section-location">
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6561.2072722021985!2d-77.02665740214967!3d-12.090424760025533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87e0dc5726f%3A0x302a982924ab57b9!2sLa%20Chola%20Criolla!5e0!3m2!1ses-419!2spe!4v1682983951437!5m2!1ses-419!2spe"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="location-information">
          <p>
            Telefono: <span>+51999-999-999</span>
          </p>

          <p>
            Horarios: <span>06:00 am a 11:00pm</span>
          </p>
          <p>
            Direccion: <span>jr brasill 1992 - Lima</span>
          </p>
          <p>
            Correo atencion: <span>info@santamaria.com</span>
          </p>

          <p>
            Correo Administrativo: <span>administracion@santamaria.com</span>
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default ContactUs;
