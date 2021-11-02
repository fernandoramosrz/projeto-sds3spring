const Footer = () => {
  return (
    <footer className=" footer mt-auto py-3 bg-dark ">
      <div className=" container ">
        <p className=" text-light ">
          {" "}
          App desenvolvido por{" "}
          <a
            href="https://github.com/fernandoramosrz"
            target=" _blank "
            rel=" noreferrer "
          >
            {" "}
            Fernando Ramos{" "}
          </a>{" "}
        </p>
        <p className="text-light ">
          {" "}
          <small>
            {" "}
            <strong> Semana da Primavera Reagir </strong> <br />
            Evento promovido Pela escola DevSuperior:{" "}
            <a
              href=" https://instagram.com/devsuperior.ig "
              target=" _blank "
              rel=" noreferrer "
            >
              {" "}
              @ devsuperior.ig{" "}
            </a>{" "}
          </small>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
