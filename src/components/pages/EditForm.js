import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  updateProduct,
} from "../../redux/productsSlice/productsAsyncThunk";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const { updateSuccess, product, getProductLoading } = useSelector(
    (state) => state.newsSlice
  );
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    full_text: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editData = new FormData();
    editData.append("name", data.name);
    editData.append("full_text", data.full_text);
    editData.append("description", data.description);
    editData.append("price", data.price);
    editData.append("image", data.image);

    dispatch(updateProduct({ data, id }));
  };

  useEffect(() => {
    setData({ ...product });
  }, [product]);

  useEffect(() => {
    if (updateSuccess) {
      navigate(`/full-info/${id}`);
    }
  }, [updateSuccess]);

  if (getProductLoading) {
    return <h2>Loading.........................</h2>;
  } else if (!Object.keys(data).length) {
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={data?.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Text:</label>
          <input
            type="text"
            className="form-control"
            value={data?.full_text}
            onChange={(e) =>
              setData((prev) => ({ ...prev, full_text: e.target.value }))
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={data?.description}
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            value={data?.price}
            onChange={(e) =>
              setData((prev) => ({ ...prev, price: e.target.value }))
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) =>
              setData((prev) => ({ ...prev, image: e.target.files[0] }))
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
