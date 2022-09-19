import bottle from "../assets/images/vino-home.png";

function BottlesShopHeaderMobile() {
  return (
    <>
      <img
        style={{ maxWidth: "45vh", width: "100%" }}
        className="d-block d-lg-none"
        src={bottle}
        alt=""
        srcSet=""
      />
    </>
  );
}

export default BottlesShopHeaderMobile;
