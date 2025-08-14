import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <footer>
      <div className="rowFooter">
        <div className="colFooter">
          <img
            src="../assets/img/logo/IRTC.jpg"
            alt="Footer Logo"
            className="logoFooter"
          ></img>
          <p className="rata-kirkan">
            The ability of teachers to develop innovative products must be
            supported by the ability of teachers to present the product in front
            of experts in order to gain input in product development and also
            the legality of the work produced.
          </p>
        </div>
        <div className="colFooter">
          <h3 className="fw-bold">Office</h3>
          <a
            href="https://goo.gl/maps/9x18coXGCmSscKec6"
            rel="noreferrer noopener"
            target="_blank"
            className="office rata-kirkan"
          >
            Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat
            16519
          </a>
          <br></br>
          <br></br>
          <a
            href="mailto:youngscientist.iysa@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            className="office "
          >
            youngscientist.iysa@gmail.com
          </a>
          <br></br>
          <br></br> 
          <a
            href="https://wa.me/+6288213248890"
            rel="noreferrer noopener"
            target="_blank"
            className="office "
          >
            +62 882 1324 8890
          </a>
        </div>
        <div className="colFooter">
          <h3 className="fw-bold">Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/homeregist">Registration</a>
            </li>
            <li>
              <a href={isHome ? "#faqs" : "/#faqs"}>FAQ</a>
            </li>
            <li>
              <a href={isHome ? "#conts" : "/#conts"}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto" />
      <p className="copyright">
        Copyright &copy; 2023, Developed by IYSA IT Division
      </p>
    </footer>
  );
};
export default Footer;
