import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../../GlobalState'
import Category from './Category';

export default function CatalogCategories() {
    const {productsContext} = useContext(GlobalContext);
    const [products] = productsContext;
    const data = products.map(product => product.category)
    const set = new Set(data);
    const categories = Array.from(set);

    const newArray = categories.map((category) => {
        return {category, checked: false};
    })

    const arrCopy = [...newArray];

    const [arr, setArr] = useState(arrCopy);

    const handleChange = (index) => {
        let tempArr = [...arr];
        tempArr[index].checked = !tempArr[index].checked;
        setArr(tempArr);
        console.log(arr);
    }

    function filterCheckbox(array) {
        const filteredItems = array.filter(item => item.checked === true);
        return filteredItems;
    }


    useEffect(() => {
        let filtered = filterCheckbox(arr);
        console.log(filtered);
    }, [arr])


    return (
        arr.map((category, index) => {
            return <Category key={index} id={index} name={category} handleChange={handleChange}/>
        })
    )
}






// import React, { useContext } from 'react'
// import { useState } from 'react';
// import { GlobalContext } from '../../GlobalState'
// import Category from './Category';

// export default function CatalogCategories() {
//     const [isChecked, setIsChecked] = useState(false);
//     const {productsContext} = useContext(GlobalContext);
//     const [products] = productsContext;
//     const data = products.map(product => product.category)
//     const set = new Set(data);
//     const categories = Array.from(set);

//     const newArr = categories.map((item, index) => {
//         return {id: index, item, checked: false}
//     })
//     const [arr, setArr] = useState(newArr);

//    const filteredArr = categories.filter(category => category.checked == true);
   
//    console.log(filteredArr);

//     const handleChecked = (e) => {
//         console.log('works');
//     }

//     return (
//         categories.map((category, index) => {
//             return <Category 
//             key={index} 
//             id={index} 
//             data={category}
//             value={[isChecked, setIsChecked]}
//             function={handleChecked}
//             />
//         })
//     )
// }
