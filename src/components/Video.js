const Video = () => {
  return (
    <>
      <section className="after-event-section" id="after-event">
        <div className="after-event-container">
          <div className="after-event-heading">
            <h1 className="section-header text-black">After Movie IRTC 2024</h1>
          </div>
          <div className="after-event-row">
            <div className="tes-vidio">
              <iframe
                className="mt-5"
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/iCngJJuchR0?si=9qA2NAMrOUD8fYTF"
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
                In addition to organizing ISIF events, IYSA also organizes 3
                other events at the same time, namely the NSIF, NRTC, and IRTC
                events. We held these 4 events for 6 days starting from November
                5-10, 2024. Alhamdulillah, this year there were about 1098 teams
                coming from 24 countries participated in the both online and
                offline competitions. 24 countries participating in this event
                include Kazakhstan, Thailand, India, Iran, Bangladesh, Pakistan,
                Hong Kong, Egypt, Kyrgyzstan, Singapore, China, Vietnam, Mexico,
                United Arab Emirates, Turkey, Philippines, Macau China,
                Malaysia, South Africa, Romania, Czech Republic, Turkmenistan,
                Russia, and Indonesia. Translated with DeepL.com (free version)
              </p>
              <p>
                Fyi, there were about 2,209 people who attended in person for
                the NSIF, NRTC, and IRTC offline competitions, and the judging
                session was divided into two days. judging sessions were divided
                into two days. The first judging day was held on November 6 and
                the on November 7.
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
