import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Carms',
            age: 22,
        },
        {
            id: 2,
            name: 'Maj',
            age: 22,
        },
        {
            id: 3,
            name: 'Marco',
            age:23
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person}/>)

    return (
        <div>
            {personList}
        </div> 
    )
}

export default NameList