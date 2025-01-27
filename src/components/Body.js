import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resListData from "../utils/mockData"

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resListData);
    return (
        <div>
            <button className="filter-btn" 
                onClick={()=> {
                    const filteredResList = listOfRestaurant.filter((res)=> res.info.avgRatingString >= 4);
                    setListOfRestaurant(filteredResList);
                }}>
                Filter 4+ Rated Restaurants
            </button>
            <div className="res-container">
                {listOfRestaurant.map((restaurantInfo) => (
                    <RestaurantCard key={restaurantInfo.info.id} resData={restaurantInfo} />
                ))}
            </div>
        </div>
    );
};

export default Body;