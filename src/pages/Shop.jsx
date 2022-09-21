import ShowShop from "../components/ShowShop";
import { Row, Container } from "react-bootstrap";
import ShopHeader from "../components/ShopHeader";
import ShopHeaderMobile from "../components/ShopHeaderMobile";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ScrollSVG } from "./scroll.svg";

function Shop({ setShowCart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <ShopHeader className="d-none d-md-block" />
        <ShopHeaderMobile />
        <Row>
          <ShowShop setShowCart={setShowCart} />
        </Row>
      </Container>
      <ScrollToTop smooth component={<ScrollSVG />} className="scrollIcon" />
    </>
  );
}

export default Shop;
