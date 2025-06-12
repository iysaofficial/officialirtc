import {
  dataAfterRegister,
  dataDuringEvent,
  dataAfterEvent,
} from "../pages/data/faqData";

export const Faq = (props) => {
  return (
    <>
      <section id="faqs" className="faq-section">
        <div id="faq" className="faq container">
          <h2 class="text-center mb-3">FAQ</h2>

          <div className="row">
            <div className="faq-title text-center">
              <h2>After Register</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {dataAfterRegister.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-title text-center pb-3">
              <br />
              <br />
              <h2>During the Event</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {dataDuringEvent.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-during-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-title text-center pb-3">
              <br />
              <br />
              <h2>After the Event</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {dataAfterEvent.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-After-2"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
