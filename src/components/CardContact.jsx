const CardContact = () => {
  return (
    <div className="card-contact-us">
      <div className="card-contact-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          height="30px"
          width="30px"
          style={{ margin: "5px" }}
        >
          <path d="M256 48l0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16l-64 0zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM160 320l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 416c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
        </svg>

        <h2 style={{ padding: "5px" }}>Contact Details</h2>
      </div>
      <div className="contact-details-item">
        <h3>Mobile No.</h3>
        <a href={`tel:+919336117544`} target="_blank" rel="noreferrer">
          <p>+919336117544</p>
        </a>
      </div>
      <div className="contact-details-item">
        <h3>Email ID</h3>
        <a href="mailto:knmill1991@gmail.com" target="_blank" rel="noreferrer">
          <p>knfs.hp@gmail.com</p>
        </a>
      </div>
      <div className="contact-details-item">
        <h3>Address</h3>
        <a href="https://maps.app.goo.gl/PRPKWxGcfzfrEqHTA">
          <p>
            Hardoi Road, Kachhauna
            <br />
            Distt-Hardoi, 241126
            <br />
            Uttar Pradesh
          </p>
        </a>
      </div>
    </div>
  );
};

export default CardContact;
