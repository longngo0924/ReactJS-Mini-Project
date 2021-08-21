import React from "react";
import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

Main.propTypes = {};

function Main(props) {
    const photoList = useSelector((state) => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePhotoEditClick = (photo) => {
        history.push(`/photo/${photo.id}`);
    };

    const handlePhotoRemoveClick = (photo) => {
        const action = removePhoto(photo.id);
        dispatch(action);
    };
    return (
        <div className="photo-main">
            <Banner title="Photo App" backgroundUrl={Images.ORANGE_BG} />
            <Container className="text-center mt-4">
                <Link className="btn btn-danger mb-4" to="/photo/add">
                    Add new photo
                </Link>
                <PhotoList
                    photoList={photoList}
                    onHandleEdit={handlePhotoEditClick}
                    onHandleRemove={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default Main;
