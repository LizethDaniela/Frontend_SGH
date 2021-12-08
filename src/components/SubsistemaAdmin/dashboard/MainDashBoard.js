import React from 'react'
import Head from '../../head/Head';
import { DashBoardComponent } from './DashBoardComponent';
import "./DashSty.css"
export const MainDashBoard = () => {
    return (
        <div>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
                <div className="d-flex justify-content-center h-50">
                    <img src={'/imgauth/ciudadela.jpg'} className="img"/>
                </div>
            </div>
        </div>
    );
};