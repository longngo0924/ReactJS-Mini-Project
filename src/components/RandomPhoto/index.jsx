import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./randomPhoto.scss";

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImgChange: PropTypes.func,
    onRandomBtnBlur: PropTypes.func,
    showError: PropTypes.bool,
};

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: "https://picsum.photos/id/1000/300/300",
    onImgChange: null,
    onRandomBtnBlur: null,
    showError: null,
};

function getRandomImgUrl() {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
    const { name, imageUrl, onImgChange, onRandomBtnBlur, showError } = props;
    const handleRandomImageChange = () => {
        if (onImgChange) {
            const randomImgUrl = getRandomImgUrl();
            onImgChange(randomImgUrl);
        }
    };

    return (
        <div className={showError ? "random-photo is-invalid" : "random-photo"}>
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onClick={handleRandomImageChange}
                    onBlur={onRandomBtnBlur}
                >
                    Random Photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Oops...pls try again"
                        onError={(e) => {
                            e.target.src = getRandomImgUrl();
                            onImgChange(e.target.src);
                            return e.target.src;
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;
