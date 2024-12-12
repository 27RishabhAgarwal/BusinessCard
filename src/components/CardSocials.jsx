const CardSocials = () => {
  return (
    <div className="card-socials">
      <div className="card-socials-title">
        <h2>Social Links</h2>
        <p>Follow me on social media</p>
      </div>
      <div className="card-socials-items">
        <a
          href="https://m.facebook.com/profile.php/?id=100021529052398"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/icons/fb_icon@72x.png" alt="instagram logo" />
          <span>Facebook</span>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="20"
              height="20"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </i>
        </a>
        <a
          href="http://www.instagram.com/rishabh275_"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/icons/insta_icon@72x.png" alt="instagram logo" />
          <span>Instagram</span>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="20"
              height="20"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </i>
        </a>
      </div>
    </div>
  );
};

export default CardSocials;
