export default function CardImage(props) {
    return (
        <img src={props.imageLink} className="card-img-top" alt={props.imageDescription}/>
    )         
}

