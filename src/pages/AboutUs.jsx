const AboutUs = () => {
  return (
    <>
      <section className="section-team">
        <h1>Nosotros</h1>

        <div className="team-body">
          <img src="./img/bread-team.png" alt="front-img-1" />

          <p>
            En nuestra panadería, los valores y principios son la base de
            nuestra existencia. Con 25 años de experiencia, nos enorgullece
            mantener la tradición viva y transmitirla a través de nuestros
            productos artesanales. Valoramos la autenticidad, la dedicación y el
            amor por el pan. Seleccionamos cuidadosamente los mejores
            ingredientes para ofrecer una calidad excepcional en cada bocado.
            Nuestro compromiso con la satisfacción del cliente nos impulsa a
            superar expectativas y brindar una experiencia memorable. Somos una
            familia unida por el sabor y la tradición. Nos esforzamos por crear
            un ambiente cálido y acogedor, donde la colaboración y el espíritu
            de equipo son fundamentales. Trabajamos en conjunto, compartimos
            ideas y nos apoyamos mutuamente para llevar adelante nuestra pasión
            por la panadería. Nuestro objetivo es crear momentos de deleite para
            nuestros clientes, ofreciendo productos que reflejen nuestro amor
            por el pan y resalten la importancia de la tradición en cada
            mordisco. En nuestra panadería, encontrarás valores arraigados en la
            calidad, el compromiso y la satisfacción del cliente, que nos han
            llevado a ser reconocidos como una referencia en la comunidad de
            amantes del pan.
          </p>
        </div>
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

      <section>
        <h2>Nuestro Equipo</h2>

        <div className="team-container">
          <div className="team-card">
            <img src="./img/team-1.png" alt="persona-1" />
            <p>Gerente General</p>
            <p>Robert Guiterrez</p>
          </div>

          <div className="team-card">
            <img src="./img/team-2.png" alt="persona-1" />
            <p>Administrador Tienda</p>
            <p>Miller Santa</p>
          </div>

          <div className="team-card">
            <img src="./img/team-3.png" alt="persona-1" />
            <p>Maestro Panaderor</p>
            <p>Jose Quispe</p>
          </div>

          <div className="team-card">
            <img src="./img/team-4.png" alt="persona-1" />
            <p>Jefe de Logistica</p>
            <p>Richard Canta</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
