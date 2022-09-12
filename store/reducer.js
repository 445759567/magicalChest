import { combineReducers } from "redux";
import {reducer as router} from '../View/Router';

const reducer = combineReducers({
    router,
})

export default reducer