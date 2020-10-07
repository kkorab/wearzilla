import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState'
import Category from './Category';

export default function CatalogCategories(props) {
    const arr = props.arr;

    return (
        arr.map((category, index) => {
            return <Category key={index} id={index} name={category} arr={props.arr} handleChange={props.handleChange}/>
        })
    )
}






// import React, { useContext } from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { GlobalContext } from '../../GlobalState'
// import Category from './Category';

// export default function CatalogCategories() {
//     const {productsContext} = useContext(GlobalContext);
//     const [products] = productsContext;
//     const data = products.map(product => product.category)
//     const set = new Set(data);
//     const categories = Array.from(set);

//     const newArray = categories.map((category) => {
//         return {category, checked: false};
//     })

//     const arrCopy = [...newArray];

//     const [arr, setArr] = useState(arrCopy);

//     const handleChange = (index) => {
//         let tempArr = [...arr];
//         tempArr[index].checked = !tempArr[index].checked;
//         setArr(tempArr);
//     }

//     function filterCheckbox(array) {
//         const filteredItems = array.filter(item => item.checked === true);
//         return filteredItems;
//     }


//     useEffect(() => {
//         let filtered = filterCheckbox(arr);
//     }, [arr])


//     return (
//         arr.map((category, index) => {
//             return <Category key={index} id={index} name={category} handleChange={handleChange}/>
//         })
//     )
// }







