import { Reducer } from "redux";
import { IFavoriteState } from "./types";

const INITIAL_STATE: IFavoriteState = {
    items: []
};

const favorite: Reducer<IFavoriteState> = () => {
    return INITIAL_STATE;
}

export default favorite;