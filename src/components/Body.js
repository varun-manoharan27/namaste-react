import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/constants";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);

        const jsonData = await data.json();

        allFetchedRestaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        console.log(allFetchedRestaurants);

        setListOfRestaurant(allFetchedRestaurants);
        setFilteredRestaurants(allFetchedRestaurants)
    }

    if (listOfRestaurant.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <input type='text' onChange={(event) => {setSearchValue(event.target.value);}} />

            <button className="search-btn" onClick={() => {
                const filteredResList = listOfRestaurant.filter(restaurant => {
                    return restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()) || 
                           restaurant.info.cuisines.join(', ').toLowerCase().includes(searchValue.toLowerCase());
                });
                setFilteredRestaurants(filteredResList);
            }}>
                Search
            </button>

            <button className="filter-btn" 
                onClick={()=> {
                    const filteredResList = listOfRestaurant.filter((restaurant)=> restaurant.info.avgRatingString >= 4.5);
                    setFilteredRestaurants(filteredResList);
                }}>
                Filter 4.5+ Rated Restaurants
            </button>
            
            {filteredRestaurants.length !== listOfRestaurant.length && (
                <>
                    <button onClick={()=>setFilteredRestaurants(listOfRestaurant)}>Clear Search/Filter</button>
                    {filteredRestaurants.length === 0 && (
                        <div style={{
                            height: 'calc(100vh - 40vh)',
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <h1>Result not found 🥲🥲😢😢😭😭😭😭</h1>
                        </div>
                    )}
                </>
            )}
                
            
            <div className="res-container">
                {filteredRestaurants.map((restaurantInfo) => (
                    <RestaurantCard key={restaurantInfo.info.id} resData={restaurantInfo} />
                ))}
            </div>
        </div>
    );
};

export default Body;