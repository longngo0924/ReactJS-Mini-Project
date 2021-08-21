import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./photoCard.scss";

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onHandleEdit: PropTypes.func,
    onHandleRemove: PropTypes.func,
};

PhotoCard.defaulProps = {
    photo: null,
    onHandleEdit: null,
    onHandleRemove: null,
};

function PhotoCard(props) {
    const { photo, onHandleEdit, onHandleRemove } = props;
    const onEditClick = () => {
        onHandleEdit(photo);
    };
    const onRemoveClick = () => {
        onHandleRemove(photo);
    };
    return (
        <div className="photo">
            <img src={photo.photo} alt="Oops... some thing were wrong" />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button
                            outline
                            size="sm"
                            color="light"
                            onClick={onEditClick}
                        >
                            Edit
                        </Button>{" "}
                        <Button
                            outline
                            size="sm"
                            color="danger"
                            onClick={onRemoveClick}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
