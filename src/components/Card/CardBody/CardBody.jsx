import React from 'react'
export default function CardBody(props) {

    const [imageOpacity, setImageOpacity] = React.useState(false)

    const toggleImageOpacity = (e) => {
        e.preventDefault();
        setImageOpacity(prev=> !prev)
    }

    return (
        <div className="card" style={{width: props.width + 'rem'}}>        
            {props.children(imageOpacity)}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <button className="btn btn-primary" onClick={toggleImageOpacity}>Toggle image</button>
            </div>
        </div>
    )
}


