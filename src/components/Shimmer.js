import RestaurantCards from "./RestaurantCard";

const Shimmer = () => {
  // return <h1>Shimmer UI Loading...</h1>
  return (
    <div className="shimmer-restaurant-list">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return (
            <div className="shimmer-effect"></div>
        );
      })}
    </div>
  );
};

export default Shimmer;
