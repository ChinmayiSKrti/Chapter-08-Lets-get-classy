import { restaurantList } from "../constants";
import RestaurantCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
};
const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // console.log("useEffect");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render");
  // console.log(restaurants);

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)
    return <h1>No Restaurants matched your filter!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
              <RestaurantCards {...restaurant.data}/>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
