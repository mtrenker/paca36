import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Gallery, Modal, Slider, ISlider } from './../components/Gallery';

import { IState, closeModal, openImage, nextImage, prevImage } from '../redux/gallery';

interface IProps {
  images: Array<{
    src: string;
  }>;
  open: boolean,
  selectedImage: string | undefined;
  currentIndex: number | undefined;
  openImage: (e: React.MouseEvent<HTMLImageElement>) => void;
  closeModalAction: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const GalleryScreen: React.FunctionComponent<IProps> = ({
  selectedImage,
  openImage,
  nextImage,
  prevImage,
  open,
  images,
  closeModalAction,
  currentIndex
}) => {
  const sliderProps: ISlider = {
    currentIndex,
    imageCount: images.length,
    image: selectedImage,
    onNextClick: nextImage,
    onPrevClick: prevImage,
  }
  return (
    <div>
      <h1>Paca 36</h1>
      <Gallery images={images} onImageClick={openImage} />
      <Modal open={open} onClose={closeModalAction}>
        <Slider {...sliderProps} />
      </Modal>
    </div>
  )
};

// Normally i would use something like reselect but normally i also wouldn't use redux for this so....
const mapStateToProps = (state: { gallery: IState }): Pick<IProps, "images" | "open" | "selectedImage" | "currentIndex"> => ({
  images: state.gallery.images,
  open: state.gallery.open,
  selectedImage: state.gallery.selectedImage,
  currentIndex: state.gallery.images.findIndex(image => image.src === state.gallery.selectedImage)
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<IProps, "closeModalAction" | "openImage" | "nextImage" | "prevImage"> => ({
  closeModalAction: () => dispatch(closeModal()),
  openImage: (e: React.MouseEvent<HTMLImageElement>) => dispatch(openImage(e)),
  nextImage: () => dispatch(nextImage()),
  prevImage: () => dispatch(prevImage()),
})

const ConnectedGallery = connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);

export {
  ConnectedGallery
};
