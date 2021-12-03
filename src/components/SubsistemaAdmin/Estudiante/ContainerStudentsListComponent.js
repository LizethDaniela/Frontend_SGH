import React from "react";
import Head from "../../head/Head"
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { StudentsListComponent } from "./StudentsListComponent";
import { ObtenerStudentsList } from "./ObtenerStudentsList";
import { HeaderStudentComponent } from "./HeaderStudentComponent";

export const ContainerStudentsListComponent = () => {
    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
                <HeaderStudentComponent />
                <ObtenerStudentsList />
                <StudentsListComponent />
            </div>
        </>
    );
};
