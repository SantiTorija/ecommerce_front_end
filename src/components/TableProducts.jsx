import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, setNumber } from "../redux/cartSlice";
import DeleteModal from "./Deletemodal";
import "../styles/Wine.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

function BasicExample() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  function addCart(wine) {
    if (wine.cartQuantity >= 0 && wine.cartQuantity < 100) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: isWine.cartQuantity + 1 }));
      } else {
        wine.cartQuantity = 1;
        dispatch(addFirstTime(wine));
      }
    }
  }

  function removeCart(wine) {
    if (wine.cartQuantity > 0 && wine.cartQuantity <= 100) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: isWine.cartQuantity - 1 }));
      }
    }
  }

  return (
    <Table className="text-white align-middle">
      <thead>
        <tr>
          <th colSpan={3} className=" text-center">
            PRODUCTO
          </th>
          <th className=" text-center">PRECIO</th>
          <th className=" text-center">CANTIDAD</th>
          <th className=" text-center">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {cartState.map((wine) => {
          return (
            <tr key={wine._id}>
              <td>
                <DeleteModal wine={wine} />
              </td>
              <td className=" text-center">
                <Link to={`/product/${wine.slug}`}>
                  <img
                    src={
                      wine.picture ||
                      "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg"
                    }
                    alt="wine_photo"
                    className="table__picture"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/product/${wine.slug}`} className="text-white">
                  {wine.name}
                </Link>
              </td>
              <td className=" text-center">{wine.price}</td>
              <td className="text-center w-25">
                <button className="button_flecha_cantidad" onClick={() => removeCart(wine)}>
                  <ArrowBackIosNewIcon />
                </button>
                <span
                  style={{
                    marginRight: wine.cartQuantity < 10 ? "3px" : "0px",
                    marginLeft: wine.cartQuantity < 10 ? "3px" : "0px",
                  }}
                >
                  {wine.cartQuantity || 0}
                </span>
                <button className="button_flecha_cantidad" onClick={() => addCart(wine)}>
                  <ArrowForwardIosIcon />
                </button>
              </td>
              <td className=" text-center">{wine.price * (wine.cartQuantity || 0)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
