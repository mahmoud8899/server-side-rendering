import { combineReducers } from 'redux'
import AuthSlice from '../features/AuthAction'
import CategorySlice from '../features/CategoryAction'
import ProductsSlice from '../features/product_action';


const rootReducer = combineReducers({
  auth: AuthSlice,
  category: CategorySlice,
  Products: ProductsSlice
});

export default rootReducer 