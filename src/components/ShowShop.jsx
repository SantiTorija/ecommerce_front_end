import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

function Shop() {
  const user = useSelector((state) => state.user);
  const allWines = ""; //llamada a la base de datos

  return (
    <>
      {allWines.map((wine) => {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={wine.picture} />
          <Card.Body>
            <Card.Title>{wine.name}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>;
      })}
    </>
  );
}
