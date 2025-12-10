import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
let SwiggyComponentBody = () => {
  let [ResCardsData, setResCardsData] = useState([]);
  let [searchVal, setSearchVal] = useState([]);
  let [filterSearch, setFiltersearch] = useState([]);
  useEffect(() => {
    debugger;
    let fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      debugger;
      let restaurantsdata =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResCardsData(restaurantsdata);
      setFiltersearch(restaurantsdata);
      console.log("rescards");
    };
    fetchData();
  }, []);

  if (!ResCardsData || ResCardsData.length === 0) {
    debugger;
    return <ShimmerUI />;
  }

  debugger;
  return (
    <>
      <div className="btnContainer">
        <button
          onClick={() => {
            let ResCards = ResCardsData.filter((elem) => {
              return elem.info.avgRating > 4.3;
            });
            console.log(ResCards);
            setResCardsData(ResCards);
          }}
        >
          Filter
        </button>
        <div id="search">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearchVal(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchVal);
              let filterSearchVal = ResCardsData.filter((elem) => {
                return elem.info.name.includes(searchVal);
              });
              setFiltersearch(filterSearchVal);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="SwiggyComponentContainer">
        {filterSearch.map((elem) => (
          <div id="swiggycomponentdiv" key={elem.info.id} className="child">
            <h1 id="names">{elem.info.name}</h1>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                elem.info.cloudinaryImageId
              }
              alt="not rendered"
            />
            <h1>{elem.info.avgRating}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SwiggyComponentBody;
