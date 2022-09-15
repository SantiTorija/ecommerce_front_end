import bottle from "../assets/images/botellaPromo.png";
import bottle2 from "../assets/images/AdriannaRiverStone-VDM_2000x.png";
import bottle3 from "../assets/images/almanegra-tinto-alejandro-kuschnaroff-argentina-blend-domaine-mendoza-vino-vinos-del-mundo_148_2000x (1).png";

function BottlesShopHeader() {
  return (
    <>
      <img
        style={{ position: "absolute", zIndex: "3", left: "3rem" }}
        className="w-75 d-none d-lg-block"
        src={bottle}
        alt=""
        srcSet=""
      />
      <img
        className="d-none d-lg-block"
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "8rem",
          width: "72%",
          marginTop: "1.2rem",
        }}
        src={bottle2}
        alt=""
        srcSet=""
      />
      <img
        className="d-none d-lg-block"
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "-3rem",
          width: "72%",
          marginTop: "1rem",
        }}
        src={bottle3}
        alt=""
        srcSet=""
      />
    </>
  );
}

export default BottlesShopHeader;
