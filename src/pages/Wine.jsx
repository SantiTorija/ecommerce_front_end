import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Wine() {
  const [wine, setWine] = useState({});
  // const { slug } = useParams();
  /* useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/wines/${slug}`,
      });
      setWine(response.data);
      return response;
    };
    dataWine();
  }, []); */
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="https://cdn.shopify.com/s/files/1/0042/8477/6517/products/19Crimes-CabSauv-VDM_2000x.jpg?v=1566868936" />
        </div>
        <div className="col-6 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
          tempore perferendis, nisi molestiae accusamus atque nostrum
          necessitatibus omnis incidunt vero quod vel perspiciatis quidem
          deleniti consectetur dolorum, veritatis esse.
        </div>
      </div>
    </div>
  );
}
export default Wine;
