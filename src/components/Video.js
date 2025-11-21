const Video = () => {
  return (
    <>
      <section className="after-event-section" id="after-event">
        <div className="after-event-container">
          <div className="after-event-heading">
            <h1 className="section-header text-black">After Movie IRTC 2025</h1>
          </div>
          <div className="after-event-row">
            <div className="tes-vidio">
              <iframe
                className="mt-5"
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/F9ApBr_8UP0?si=wcPKQ_34DD4wdUY9"
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
                with the Vocational School of Diponegoro University and the
                İzmir International Innovation Science Energy Engineering Fair
                İzmiriiseef, namely NSIF (National Science and Invention Fair),
                ISIF (International Science and Invention Fair), NRTC (National
                Research Teacher Competition), and IRTC (International Research
                Teacher Competition), were successfully held again in 2025.
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
