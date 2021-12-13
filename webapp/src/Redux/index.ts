import { combineReducers, createStore, Reducer } from 'redux';
import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { loggedInUserReducer, LoggedInUserState } from './loggedInUser/reducer';

export interface StoreState {
    loggedInUser: LoggedInUserState
}

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    loggedInUser: loggedInUserReducer as any,
})

export const store = createStore(rootReducer, devToolsEnhancer({}))