import React from "react";
import "./save.scss";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

Save.propTypes = {};

const generateId = () => {
    return Math.trunc(Math.random() * 3000 + 1000);
};

function Save(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;
    const editPhoto = useSelector((state) =>
        state.photos.find((photo) => photo.id === +photoId)
    );

    const initialValue = isAddMode
        ? {
              title: "",
              category: null,
              photo: "",
          }
        : editPhoto;

    const handleSubmit = async (value) => {
        try {
            if (isAddMode) {
                const newPhoto = {
                    ...value,
                    id: generateId(),
                };
                const action = addPhoto(newPhoto);
                await dispatch(action);
            } else {
                const action = updatePhoto(value);
                await dispatch(action);
            }
        } catch (error) {
            console.log(error);
        } finally {
            history.push("/photo");
        }
    };
    return (
        <div className="photo-save">
            <Banner title="Pick your amazing photo" />
            <div className="photo-save__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                    initValue={initialValue}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default Save;
