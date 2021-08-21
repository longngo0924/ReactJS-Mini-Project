import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onHandleEdit: PropTypes.func,
    onHandleRemove: PropTypes.func,
};

PhotoList.defaultProps = {
    photoList: [],
    onHandleEdit: null,
    onHandleRemove: null,
};

function PhotoList(props) {
    const { photoList, onHandleEdit, onHandleRemove } = props;

    return (
        <Row>
            {photoList.map((photo) => {
                return (
                    <Col key={photo.title} xs="12" md="6" lg="3">
                        <PhotoCard
                            photo={photo}
                            onHandleEdit={onHandleEdit}
                            onHandleRemove={onHandleRemove}
                        />
                    </Col>
                );
            })}
        </Row>
    );
}

export default PhotoList;
