const CardContact = () => {
    return (
      <div className="card-contact-us">
        <div className="card-contact-title">
            <i class="fa-solid fa-mobile-screen"></i>
            <h2>Contact Us</h2>
        </div>
        <div className="contact-details-item">
            <h3>Call Us</h3>
            <p>+919336117544</p>
        </div>
        <div className="contact-details-item">
            <h3>Mail Us</h3>
            <p>knfs.hp@gmail.com</p>
        </div>
        <div className="contact-details-item">
            <h3>Address</h3>
            <p>Hardoi Road, Kachhauna<br />Distt-Hardoi, 241126<br />Uttar Pradesh</p>

            <a className="button" href="https://maps.app.goo.gl/PRPKWxGcfzfrEqHTA" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-location-arrow"></i> Directions
            </a>
        </div>
      </div>
    );
}
  
export default CardContact;