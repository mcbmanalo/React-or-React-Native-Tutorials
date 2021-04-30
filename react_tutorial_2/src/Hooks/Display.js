import React, { useEffect, useState } from 'react'

function Display(props) {
    const [itemList, setItemList] = useState([])

    function GetPropertyValue(obj1, dataToRetrieve) {
        return dataToRetrieve
          .split('.') // split string based on `.`
          .reduce(function(o, k) {
            return o && o[k]; // get inner property if `o` is defined else get `o` and return
          }, obj1) // set initial value as object
      }

    const deleteHandler = () => {
        let listOfItems = []
        itemList.forEach(item => {
            if (item.checked)
            {
                console.log(item.id)
            }
        });
    }

    useEffect(() => {
        const tempList = props.list.map(item => {
            return {
                ...item,
                checked: false
            }})
        setItemList(tempList)
        console.log(tempList)
    }, [])


    return (
        <div className="px-10">
            
            {props.displayNames.map(name => <h1 className="px-10 inline-block">{name}</h1>)}
            <button>Create</button>
            <button onClick={deleteHandler}>Delete</button>
            <ul>
                {itemList.map((item, index) => {
                    return(
                        <li className="flex place-items-center" key={item.id}>
                            <input type="checkbox" checked={item.checked} onChange={e => {
                                let checked = e.target.checked
                                setItemList(
                                    itemList.map(data => {
                                        if(item.id == data.id) {
                                            data.checked = checked;
                                        }
                                        return data
                                    })
                                )
                            }}></input>
                            {props.toDisplay.map(display => <p className="px-10">{GetPropertyValue(item, display)}</p>)}
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default Display