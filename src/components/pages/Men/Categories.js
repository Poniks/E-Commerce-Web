import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';


const Categories = ({item, filterHandler, id, active}) => {

    return (
        <>
            {active ? (
                <li value={item} className={active ? "active" : ""}> 
                    <div onClick={() => {filterHandler(item, id)}}>
                        {item} 
                    </div>
                    <ClearIcon onClick={() => {filterHandler(item, id, "delete")}} />
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