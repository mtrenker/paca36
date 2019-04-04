import { AnyAction } from "redux";

export interface IState {
  pictures: Array<{
    url: string;
    title: string;
  }>;
  selectedImage: number | undefined;
}

const CLICK_PACA   = 'paca36/CLICK_PACA';

const initalState: IState = {
  pictures: [],
  selectedImage: undefined,
}

export default function reducer(state = initalState, action: AnyAction): IState {
  switch (action.type) {
    case CLICK_PACA:
      return {
        ...state,
        selectedImage: action.payload.id
      };
    default: return state;
  }
}

export function dummyClick(event: React.MouseEvent, id: number) {
  return {
    type: CLICK_PACA,
    payload: {
      id
    }
  };
}

