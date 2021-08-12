import CardImage from "./CardImage/CardImage";
import CardBody from "./CardBody/CardBody"
import PropTypes from "prop-types"


export default function Card(props) {
    return (
        <CardBody {...props} content={props.children}>
        {(imageOpacity) => imageOpacity ? <CardImage {...props}/> : null}
        </CardBody>
      );
}

Card.propTypes = {
    width: PropTypes.string,
    title: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
    imageDescription: PropTypes.string
}

Card.defaultProps = {
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
    imageDescription: "No image"
}