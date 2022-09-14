import ShowShop from "../components/ShowShop";
import { Row, Container } from "react-bootstrap";
import ShopHeader from "../components/ShopHeader";
import ShopHeaderMobile from "../components/ShopHeaderMobile";

function Shop({ setShowCart }) {
  return (
    <>
      <Container>
        <ShopHeader className="d-none d-md-block" />
        <ShopHeaderMobile />
        <Row>
          <ShowShop setShowCart={setShowCart} />
        </Row>
      </Container>
    </>
  );
}

export default Shop;
