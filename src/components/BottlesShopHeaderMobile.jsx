import bottle from "../assets/images/shop-bottle.png";

function BottlesShopHeaderMobile() {
  return (
    <>
      <img
        style={{ maxWidth: "45vh", width: "55%" }}
        className="d-block d-lg-none"
        src={bottle}
        alt=""
        srcSet=""
      />
    </>
  );
}

export default BottlesShopHeaderMobile;
