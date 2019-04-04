import { AnyAction } from "redux";

import { IImage } from "../components/Gallery";

export interface IState {
  open: boolean
  images: Array<{
    src: string;
  }>;
  selectedImage: string | undefined;
}

const CLOSE_MODAL = 'paca36/CLOSE_MODAL';
const OPEN_IMAGE = 'paca36/OPEN_IMAGE';
const NEXT_IMAGE = 'paca36/NEXT_IMAGE';
const PREVIOUS_IMAGE = 'paca36/PREVIOUS_IMAGE';

const images: IImage[] = [...new Array(25)].map((_, idx) => ({
  src: `https://source.unsplash.com/80${idx % 10}x600/?alpaca`
}));

const initalState: IState = {
  open: false,
  images: images,
  selectedImage: undefined,
}

export default function reducer(state = initalState, action: AnyAction): IState {
  const currentImageIndex = state.images.findIndex(image => image.src === state.selectedImage);
  switch (action.type) {
    case OPEN_IMAGE:
      return {
        ...state,
        open: true,
        selectedImage: action.payload.image
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
        selectedImage: undefined,
      };
    case NEXT_IMAGE:
      const nextImage = state.images[currentImageIndex + 1] || state.images[0];
      return {
        ...state,
        selectedImage: nextImage.src
      };
    case PREVIOUS_IMAGE:
      const previousImage = state.images[currentImageIndex + 1] || state.images[0];
      return {
        ...state,
        selectedImage: previousImage.src
      };
    default: return state;
  }
};

export const nextImage = (): AnyAction => ({
  type: NEXT_IMAGE
});

export const prevImage = (): AnyAction => ({
  type: PREVIOUS_IMAGE
});

export const closeModal = (): AnyAction => ({
  type: CLOSE_MODAL
});

export const openImage = (e: React.MouseEvent<HTMLImageElement>): AnyAction => ({
  type: OPEN_IMAGE,
  payload: {
    image: e.currentTarget.src
  }
});
