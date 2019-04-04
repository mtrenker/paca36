import * as ReactDOM from 'react-dom';
import * as React from 'react';
import styled from 'styled-components';

// <Gallery>
export interface IGallery {
  images: IImage[];
  onImageClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

export const Gallery: React.FunctionComponent<IGallery> = ({ images, onImageClick }) => (
  <Grid>
    {images.map((image, idx) => (
      <Tile key={idx}>
        <Image onClick={onImageClick} src={image.src} />
      </Tile>
    ))}
  </Grid>
);
// </Gallery>

// <Image>
export interface IImage {
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
  className?: string;
  src: string;
};

const RawImage: React.FunctionComponent<IImage> = ({ onClick, className, src }) => (
  <img onClick={onClick} className={className} src={src} />
);

export const Image = styled(RawImage)`
  cursor: pointer;
  grid-area: image;
  width: 100%;
  object-fit: contain;
`;
// </Image>

// <Slider>
export interface ISlider {
  className?: string;
  image?: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  imageCount: number;
  currentIndex: number;
};

const NextButton = styled.button`
  grid-area: next;
`;
const PreviousButton = styled.button`
  grid-area: prev;
`;
const Counter = styled.p`
  background-color: #fff;
  margin: 0;
  text-align: center;
  grid-area: counter;
`;

const RawSlider: React.FunctionComponent<ISlider> = ({
  className,
  image,
  onPrevClick,
  onNextClick,
  currentIndex,
  imageCount
}) => {
  return (
    <div className={className}>
      <PreviousButton onClick={onPrevClick}>Previous</PreviousButton>
      {image &&
        <>
          <Image src={image} />
          <Counter>{`${currentIndex + 1} / ${imageCount}`}</Counter>
        </>
      }
      <NextButton onClick={onNextClick}>Next</NextButton>
    </div>
  );
};

export const Slider = styled(RawSlider)`
  display: grid;
  grid-template:
    "prev image next"
    "prev counter next"
  ;
  max-width: 1024px;
`;
// </Slider>

// <Modal> - A poor mans modal
interface IModal {
  open?: boolean;
  onClose?: () => void;
}
const BackDrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

interface ICloseButton {
  className?: string;
  onClose?: () => void;
}

const RawCloseButton: React.FunctionComponent<ICloseButton> = ({ children, className, onClose }) => (
  <button onClick={onClose} className={className}>{children}</button>
)

const CloseButton = styled(RawCloseButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
`;

export const Modal: React.FunctionComponent<IModal> = ({ children, open, onClose }) => (
  <>
    {open &&
      ReactDOM.createPortal(
        <>
          <BackDrop />
          <Wrapper>
            <CloseButton onClose={onClose}>Close</CloseButton>
            {children}
          </Wrapper>
        </>,
        document.body
      )
    }
  </>
)
// </Modal>


// helper components

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-items: center;
`;

const Tile = styled.div`
  flex: 1;
  max-width: 100%;
  min-width: 150px;

  margin: 10px;
`;
