import React, { useState, useEffect } from "react";
export const SwiggyApi = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])

  const FetchData = async () => {
    try {
      // fetch api using URL
      const api = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      //  convert data into JSON format
      const response = await api.json();
      /// storing the data from api in state
      setData(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterData(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    } catch {}
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleTopRAted = () => {
    setFilterData(
      data.filter((item) => {
        return item.info.avgRating > 4;
      })
    );
  };

  const handleMediumRAted = () => {
    setFilterData(
      data.filter((item) => {
        return item.info.avgRating < 4;
      })
    );
  };
  return (
    <>
      <h1>SwiggyApi calling BY Akshay</h1>
      <button onClick={handleTopRAted}>Top Rated</button>&nbsp;&nbsp;&nbsp;
      <button onClick={handleMediumRAted}>Medium Rated</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {filterData.length > 0
          ? filterData.map((item, index) => {
              console.log(item);
              return (
                <>
                  <>
                    <img
                      className="img-swiggy"
                      style={{
                        width: "100px",
                        height: "200px",
                        padding: "5px",
                      }}
                      src={
                        `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
                        item?.info?.cloudinaryImageId
                      }
                    />
                    <h1>{item?.info?.name}</h1>
                    <h3>Avg rating:{item?.info?.avgRating}</h3>
                    <h3>{item?.info?.costForTwo}</h3>
                  </>
                </>
              );
            })
          : "no data is available"}
      </div>
    </>
  );
};
