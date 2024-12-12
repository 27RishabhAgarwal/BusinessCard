const CardPay = () => {
  const toggleItems = (e) => {
    const items = document.querySelector(".card-pay-items");
    items.classList.toggle("show");
    e.target
      .closest(".card-pay")
      .querySelector(".card-pay-title .fa-chevron-down")
      .classList.toggle("rotate");
  };

  const toggleItemBody = (e) => {
    const itemBody = e.target
      .closest(".card-pay-item")
      .querySelector(".card-pay-item-body");
    itemBody.classList.toggle("show");
    e.target
      .closest(".card-pay-item")
      .querySelector(".card-pay-item .fa-chevron-down")
      .classList.toggle("rotate");

    const allItems = document.querySelectorAll(".card-pay-item-body");
    allItems.forEach((item) => {
      if (item !== itemBody) {
        item.classList.remove("show");
        item
          .closest(".card-pay-item")
          .querySelector(".card-pay-item .fa-chevron-down")
          .classList.remove("rotate");
      }
    });
  };

  async function copyToClipBoard(e) {
    const text = document.querySelector(".bank-details table").innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    } finally {
      e.target.innerText = "Copied";
    }
  }

  const downloadQR = (e) => {
    const qr = e.target
      .closest(".card-pay-item-body")
      .querySelector(".qr-details img");
    const a = document.createElement("a");
    a.href = qr.src;
    a.download =
      e.target
        .closest(".card-pay-item")
        .querySelector(".card-pay-item-header h3").innerText + ".png";
    a.click();
  };

  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <div className="card-pay">
      <div className="card-pay-title" onClick={toggleItems}>
        <h2>Pay Us</h2>
        <p>Pay us by clicking here</p>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </i>
      </div>
      <div className="card-pay-items">
        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/upi_logo.png" alt="" />
            <div>
              <h3>UPI Pay</h3>
              <p>Click to get QR</p>
            </div>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </i>
          </div>
          <div className="card-pay-item-body">
            <div className="qr-details">
              <img src="./assets/upi_QR.png" alt="" />
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={downloadQR}>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                  </i>
                  Download
                </button>
                <br></br>
                {/* <button className="btn btn-primary" onClick={() => openInNewTab('upi://pay?pa=paytmqr18e4crfuyr@paytm&pn=Paytm')}>Pay</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/hp_pay_logo.png" alt="" />
            <div>
              <h3>HP Pay</h3>
              <p>Click to get QR</p>
            </div>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </i>
          </div>
          <div className="card-pay-item-body">
            <div className="qr-details">
              <img src="./assets/qrcode.png" alt="" />
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={downloadQR}>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                  </i>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-pay-item">
          <div className="card-pay-item-header" onClick={toggleItemBody}>
            <img src="./assets/pnb_logo.jpg" alt="" />
            <div>
              <h3>Bank Details</h3>
              <p>Click to get details</p>
            </div>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </i>
          </div>
          <div className="card-pay-item-body">
            <div className="bank-details">
              <table>
                <thead>
                  <tr>
                    <th colspan="3">Punjab National Bank</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Account Holder</th>
                    <td>:</td>
                    <td>KEDAR NATH FILLING STATION</td>
                  </tr>
                  <tr>
                    <th>Account No.</th>
                    <td>:</td>
                    <td>7531009300000110</td>
                  </tr>
                  <tr>
                    <th>IFSC Code</th>
                    <td>:</td>
                    <td>PUNB0753100</td>
                  </tr>
                  <tr>
                    <th>Branch</th>
                    <td>:</td>
                    <td>Kachhauna Patseni </td>
                  </tr>
                  <tr>
                    <th>Account Type</th>
                    <td>:</td>
                    <td>Current Account</td>
                  </tr>
                </tbody>
              </table>
              <div className="card-utility-button">
                <button className="btn btn-primary" onClick={copyToClipBoard}>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20"
                      height="20"
                    >
                      <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                    </svg>
                  </i>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPay;
