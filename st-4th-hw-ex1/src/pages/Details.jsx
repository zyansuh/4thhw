import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    console.log("Detail Page ID:", id);
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default Detail;
