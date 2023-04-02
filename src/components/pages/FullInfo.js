import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  deleteProduct,
} from "../../redux/productsSlice/productsAsyncThunk";

const FullInfo = () => {
  const { product, getProductLoading, deleteSuccess } = useSelector(
    (state) => state.newsSlice
  );
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  useEffect(() => {
    if (deleteSuccess === "success") {
      navigate("/");
    }
  }, [deleteSuccess]);

  if (getProductLoading) {
    return <h2>Loading..........</h2>;
  }

  return (
    <div className="mt-5">
      <div className=" w-50  card mx-auto text-center" key={product.id}>
        <img
          src={product.image}
          alt={product.name}
          height={250}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body ">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.full_text}</p>
          <p className="card-info">{product.description}</p>
          <button
            className="btn btn-outline-danger fw-bold me-5"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            Delete
          </button>
          <Link to={`/edit-post/${product.id}`}>
            <button className="btn btn-outline-warning fw-bold">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullInfo;
