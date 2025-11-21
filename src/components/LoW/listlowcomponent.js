import React from "react";

function ListLow() {
  const winners = [
    {
      year: 2025,
      color: "warning",
      link: "/low2025",
      external: true,
    },
    {
      year: 2024,
      color: "primary",
      link: "https://drive.google.com/drive/folders/10liMo_gMbouFgULtwlLfvxNInqIxPJH4?usp=drive_link",
      external: false,
    },
    {
      year: 2023,
      color: "primary",
      link: "https://drive.google.com/file/d/1d-kHyOz1eHjZvxVGDBpnJSMWFlwTKbte/view?usp=sharing",
      external: false,
    },
    {
      year: 2022,
      color: "primary",
      link: "https://drive.google.com/file/d/11u-wyqTiCAHS064A20X9HXWWdO_S3MFq/view?usp=share_link",
      external: false,
    },
  ];
  return (
    <>
      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {winners.map((item) => (
            <div key={item.year} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm text-center">
                {/* Card Body */}
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold fs-4 mb-3">{item.year}</h5>
                  {/* Link Internal atau External */}
                  {item.external ? (
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListLow;
