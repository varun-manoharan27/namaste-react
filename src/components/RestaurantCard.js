import {SWIGGY_IMAGE_BASE_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    let {resData} = props;
    let {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla} = resData?.info;
    return (
        <div className="res-card">
            <div className="res-image">
                <img
                    alt="restaurant-logo"
                    className="res-logo"
                    src={SWIGGY_IMAGE_BASE_URL + cloudinaryImageId} 
                />
            </div>
            <h3 className="res-Name">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(', ')}</h4>
            <h4 className="res-ratings">{avgRatingString +" Rating"}</h4>
            <h4 className="res-cost">{costForTwo}</h4>
            <h4 className="res-time">{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;