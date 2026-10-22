const Video = () => {
  return (
    <>
      <section className="after-event-section" id="after-event">
        <div className="after-event-container">
          <div className="after-event-heading">
            <h1 className="section-header text-black">After Movie IRTC 2026</h1>
          </div>
          <div className="after-event-row">
            <div className="tes-vidio">
              <iframe
                className="mt-5"
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/myaDGUzUt6s?si=rrJ93FBls7pKXz7V"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="tes-p">
              <br />
              <br />
              <p>
                Four prestigious competitions organized by IYSA in collaboration
                with the Fakultas Matematika dan Ilmu Pengetahuan Alam
                Universitas Indonesia, namely NSIF (National Science and
                Invention Fair), ISIF (International Science and Invention
                Fair), NRTC (National Research Teacher Competition), and IRTC
                (International Research Teacher Competition), were successfully
                held again in 2026.
              </p>
              <p>
                This year marks the second year for NSIF, the seventh year for
                ISIF, and the fifth year for NRTC and IRTC. Participant
                enthusiasm continues to grow, with a total of 774 teams
                participating in both online and offline competitions.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
