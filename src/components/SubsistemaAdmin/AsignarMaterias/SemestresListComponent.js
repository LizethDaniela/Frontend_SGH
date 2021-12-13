import React from 'react';
import { useSelector } from 'react-redux';
import { SemestreItem } from './SemestreItem';

export const SemestresListComponent = () => {
    const { sem } = useSelector((state) => state);
    const { data } = sem;
    console.log(data);
    return (
        <div className="asignarsemestre">
            { data &&
                data.map( item => {
                    return <SemestreItem key = {item._id} {...item}/>;
                })
            }
        </div>
    );
};
