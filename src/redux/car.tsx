import { AnyAction } from "redux";

import { IImage } from "../components/Gallery";

export interface IState {
  cars: Array<{
    media: Array<{
      src: string
    }>;
  }>;
}

const LOAD_CARS = 'paca36/LOAD_CARS';

const initalState: IState = {
  cars: [],
}

export default function reducer(state = initalState, action: AnyAction): IState {
  switch (action.type) {
    case LOAD_CARS:
      return {
        ...state,
      };
    default: return state;
  }
};
