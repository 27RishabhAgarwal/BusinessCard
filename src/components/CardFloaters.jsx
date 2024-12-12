// function copyToClipBoard(){
//     navigator.clipboard.writeText("https://27rishabhagarwal.github.io/BusinessCard/")
//     alert("Copied to clipboard!")
//    }
const copyToClipBoard = () => {
  navigator.share({
    url: "https://27rishabhagarwal.github.io/BusinessCard/",
  });
};

const CardFloaters = () => {
  return (
    <>
      <a
        href="./assets/RishabhAgarwal.vcf"
        download="RishabhAgarwal"
        className="card-floaters floater-right-btn"
      >
        <p>Add to Contact</p>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="25px"
            height="25px"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
        </i>
      </a>
      <button
        id=".share-button"
        className="card-floaters floater-left-btn"
        onClick={copyToClipBoard}
      >
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="25px"
            height="25px"
          >
            <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
          </svg>
        </i>
      </button>
    </>
  );
};

export default CardFloaters;
