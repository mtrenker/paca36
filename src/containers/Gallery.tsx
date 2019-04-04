import * as React from 'react';
import { connect } from 'react-redux';

import { IState, dummyClick } from '../redux/gallery';
import { Dispatch } from 'redux';

interface IProps {
  DUMMY_CLICK: (imageNumber: number) => (e: React.MouseEvent) => void;
  selected: number | undefined;
}

const Gallery: React.FunctionComponent<IProps> = ({DUMMY_CLICK, selected}) => (
  <div>
    <h1>Gallery</h1>
    <button onClick={DUMMY_CLICK(12)}>DUMMY ACTION (selects `12`)</button>
    <p>Selected: {selected || 0}</p>
  </div>
)

const mapStateToProps = (state: {gallery: IState}) => ({
  selected: state.gallery.selectedImage,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<IProps, "DUMMY_CLICK"> => ({
  DUMMY_CLICK: (imageNumber) => (e) => dispatch(dummyClick(e, imageNumber))
})

const ConnectedGallery = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export {
  ConnectedGallery
};
