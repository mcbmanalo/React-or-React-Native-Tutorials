import React from 'react'

function NameList() {
    const names = ['Carms', 'Maj', 'Marco']

    return (
        <div>
            {names.map(name => <h1>{name}</h1>)}
        </div>
    )
}

export default NameList

    const names = ['Carms', 'Maj', 'Marco']
