import React from 'react';


const Categories = ({item, filterHandler, id, active}) => {

    return (
        <li onClick={() => {filterHandler(item, id)}} value={item} className={active ? "active" : ""}> 
            {item}
        </li>        
    );
}

export default Categories;