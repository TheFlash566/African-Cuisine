function Card(props) {
    return(
        <div className="card">
            <div className="food-name">{props.foodName}</div>
            <div className="food-image">
            <img className="card-img"
                src={props.img}
                style={{width: '290px',
                    height: '214px',
                    borderRadius: '25px',
                    padding: '5px',}}
            />
            </div>
            <div className="food-amount">Price : ₦{props.price}</div>
            <div
            className="add-to-cart"
            style={{display: 'flex', paddingTop: '8px', paddingLeft: '20px',}}
            >
            <a className="adtc" href="#add-to-cart"
                >Add to cart
                <i className="fas fa-cart-arrow-down"></i>
            </a>
            </div>
        </div>
    )
}

export default Card