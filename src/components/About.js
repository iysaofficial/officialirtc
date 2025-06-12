const About = () => {
  return (
    <section className="hero-section">
      <div className="back">
        <div className="container hero-row about-flex">
          <div className="irtc-img-wrapper">
            <img
              src="../assets/img/logo/IRTC.jpg"
              className="img-fluid irtc-img"
              alt="IRTC Logo"
            />
          </div>
          <div className="hero-content">
            <h1 className="text-center">International Research</h1>
            <h1 className="text-center">Teacher Competition</h1>
            <p>
              Indonesian Young Scientist Association (IYSA) continue to
              strive to increase their role and contribution in the world of
              education, especially research by organizing a series of
              activities such as webinars on research, online research
              courses, as well as organizing national level research
              competitions and international, as an effort to help improve the
              competence of teachers in Indonesia and help develop quality
              innovative ideas for the advancement of teachers in particular
              and also their immediate environment.
            </p>
            <p>
              The ability of teachers to develop innovative products must be
              supported by the ability of teachers to present the product in
              front of experts in order to gain input in product development
              and also the legality of the work produced. In connection with
              this, the Indonesian Young Scientist Association (IYSA) took the
              initiative to hold an International Research Teacher Competition
              (IRTC).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
