const CardPay = () => {

    const toggleItemBody = (e) => {
        const itemBody = document.querySelector('.card-pay-item-body');
        itemBody.classList.toggle('show');
        document.querySelector('.card-pay-item .fa-chevron-down').classList.toggle('rotate');
    }

    return (
        <div className="card-pay">
            <div className="card-pay-title">
                <h2>Pay Us</h2>
                <p>Pay us by clicking here</p>
            </div>
            <div className="card-pay-item">
                <div className="card-pay-item-header" onClick={toggleItemBody}>
                    <img src="./assets/hp_pay_logo.png" alt="" />
                    <div>
                        <h3>Pay Us</h3>
                        <p>Click to get details</p>
                    </div>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="card-pay-item-body">
                    <div className="qr-details">
                        <h3>1. </h3>
                        <img src="./assets/qr-code-icon.jpg" alt="" />
                    </div>
                    <div className="bank-details">
                        <h3>2. Axis Bank</h3>
                        <p>Account No: 123456789</p>
                        <p>IFSC: 123456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPay;