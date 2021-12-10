import React from 'react';
import {Provider} from "react-redux";
import store from '../store/store';
import { BrowserRouter } from "react-router-dom";
import  RouterApp  from './RouterApp/RouterApp';

export const MainApp = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </Provider>
    );
};
