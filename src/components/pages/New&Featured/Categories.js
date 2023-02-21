import React from 'react';
import CancelIcon from '@material-ui/icons/DeleteForever';


const Categories = ({item, filterHandler, id, active}) => {

    return (
        <>
            {active ? (
                <li value={item} className={active ? "active" : ""}> 
                    <div onClick={() => {filterHandler(item, id)}}>
                        {item} 
                    </div>
                    <CancelIcon onClick={() => {filterHandler(item, id, "delete")}} />
                </li> 
                ) : (
                <li value={item} className={active ? "active" : ""}> 
                    <div onClick={() => {filterHandler(item, id, "filter")}}>
                        {item} 
                    </div>
                </li> 
            )} 
        </>      
    );
}

export default Categories;