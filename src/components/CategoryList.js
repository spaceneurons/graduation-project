import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
    const renderedList = props.categorized.map((cat, i) => {
        return <CategoryItem cat={cat} key={i}/>
    })
    return(
        <div>
            <h5>
            Search by category "{props.categoryname}"
            </h5>
        <div className="card-columns">
            {renderedList}
        </div>
        </div>
    )
}

export default CategoryList;