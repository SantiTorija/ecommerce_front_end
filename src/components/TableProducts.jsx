import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addFirstTime, setNumber, deleteItem } from "../redux/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import DeleteModal from "./Deletemodal";
import "../styles/Wine.css";

function BasicExample() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const handleAddCart = (value, wine) => {
    if (value >= 0) {
      const isWine = cartState.find((element) => element._id === wine._id);
      if (isWine) {
        dispatch(setNumber({ id: isWine._id, quantity: value }));
      } else {
        wine.cartQuantity = value;
        dispatch(addFirstTime(wine));
      }
    }
  };

  function destroyWine(wine) {
    const isWine = cartState.find((element) => element._id === wine._id);
    console.log(isWine);
    if (isWine) {
      dispatch(deleteItem({ id: isWine._id }));
      console.log("lo borre");
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
            <tr>
              <td>
                <DeleteModal wine={wine} />
              </td>
              <td className=" text-center">
                <img
                  src={
                    wine.picture ||
                    "https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg"
                  }
                  alt="wine_photo"
                  className="table__picture"
                />
              </td>
              <td>{wine.name}</td>
              <td className=" text-center">{wine.price}</td>
              <td className=" text-center">
                <input
                  type="number"
                  className="cart__cant__input"
                  defaultValue={wine.cartQuantity || 0}
                  onChange={(e) => handleAddCart(e.target.value, wine)}
                ></input>
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
