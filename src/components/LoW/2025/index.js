import React from "react";
import { useState } from "react";

export default function List2025() {
  const [mode, setMode] = useState("Online"); // "Online" or "Offline"

  const categories = [
    {
      label: "Teacher",
      driveLink: {
        Online:
          "https://drive.google.com/file/d/1yWn77nQv_Yre7da19FjCY9x1u5pTA6SX/view?usp=sharing",
        Offline: "https://drive.google.com/file/d/1aH76Nl-08FoVwcDr4uLc4HLiv36sikOQ/view?usp=sharing",
      },
    },
  ];

  return (
    <>
      <div className="container py-5">
        {/* Mode Switch (Online / Offline) */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group" role="group" aria-label="Mode selection">
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "Online" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("Online")}
            >
              Online
            </button>
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "Offline" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("Offline")}
            >
              Offline
            </button>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((cat) => {
            const link = cat.driveLink[mode]; // jika kosong => falsy
            return (
              <div key={cat.label} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="mb-3 fs-1">🏆</div>
                    <h5 className="card-title fw-bold">{cat.label}</h5>
                    <p className="text-muted mb-3">
                      List of Winners {cat.label} - 2025 ({mode})
                    </p>

                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Open ${cat.label} winners PDF (${mode})`}
                      >
                        Open
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        disabled
                        aria-label={`${cat.label} ${mode} coming soon`}
                      >
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
