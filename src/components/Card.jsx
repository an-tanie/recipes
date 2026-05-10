export default function Card({image,name,ingredients,cuisine,rating}){
    return <div className="card">
        <img src={image} />
        <div className="infoBox">
            <h4>{name}</h4>
            <p>ingredients: {ingredients}</p>
            <h5>cuisine: {cuisine}</h5>
            <span>rating: {rating}</span>
        </div>
    </div>
}