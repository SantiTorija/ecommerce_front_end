import bottle from "../assets/images/botellaPromo.png";
import bottle2 from "../assets/images/AdriannaRiverStone-VDM_2000x.png";
import bottle3 from "../assets/images/almanegra-tinto-alejandro-kuschnaroff-argentina-blend-domaine-mendoza-vino-vinos-del-mundo_148_2000x (1).png";

function BottlesShopHeaderMobile() {
  return (
    <>
      <img
        style={{ position: "absolute", zIndex: "3", left: "-10rem", width: "20rem" }}
        className="d-block d-lg-none"
        src={bottle}
        alt=""
        srcSet=""
      />
      <img
        className="d-block d-lg-none "
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "-6rem",
          width: "19rem",
          marginTop: "1.2rem",
        }}
        src={bottle2}
        alt=""
        srcSet=""
      />
      <img
        className="d-block d-lg-none "
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "-13rem",
          width: "19rem",
          marginTop: "1rem",
        }}
        src={bottle3}
        alt=""
        srcSet=""
      />
    </>
  );
}

export default BottlesShopHeaderMobile;
