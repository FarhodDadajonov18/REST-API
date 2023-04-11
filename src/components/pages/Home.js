import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productsSlice/productsAsyncThunk";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Home = () => {
  const { news, newsLoadingStatus } = useSelector((state) => state.newsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {newsLoadingStatus ? (
        <Loading />
      ) : (
        <div className="card-header mt-3">
          {news.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} height={250} />
                <div className="card-body">
                  <h5 className="card-title">{item.name.slice(0, 20)}...</h5>
                  <p className="card-info">{item.full_text.slice(0, 20)}</p>
                  <p className="card-text">
                    {item.description.slice(0, 20)}....
                  </p>
                  <Link
                    to={`/full-info/${item.id}`}
                    className="btn btn-outline-warning"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
