import React, { useState } from 'react'
import axios from 'axios'
import Field from '../Field'

function AddUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        "street": '',
        "suite": '',
        "city": '',
        "zipcode": ''
    });
    const [geoAddress, setGeoAddress] = useState({
        "lat": '',
        "lng": ''
    })
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState({
        "name": '',
        "catchPhrase": '',
        "bs": ''
    });

    const handleCreateUser = event => {
        event.preventDefault();

        const user = {
            id: 11,
            name: name,
            username: username,
            email: email,
            address: {
                ...address,
                "geo": {...geoAddress}
            },
            phone: phone,
            website: website,
            company: company
        }

        // alert(`${name},${username},${email},${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode},${user.address.geo.lat},${user.address.geo.lng}
        //     \n${phone},${website},${company.name},${company.catchPhrase},${company.bs}`)
        axios.post('https://jsonplaceholder.typicode.com/users/', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    return (
        <form onSubmit={handleCreateUser}>
            <Field fieldTitle="Name" fieldValue={name} onChange={value => setName(value)}></Field>
            <Field fieldTitle="Username" fieldValue={username} onChange={value => setUsername(value)}></Field>
            <Field fieldTitle="Email" fieldValue={email} onChange={value => setEmail(value)}></Field>
            <Field fieldTitle="Street Address" fieldValue={address.street} onChange={value => setAddress({ ...address, street:value})}></Field>
            <Field fieldTitle="Suite" fieldValue={address.suite} onChange={value => setAddress({ ...address, suite:value})}></Field>
            <Field fieldTitle="City" fieldValue={address.city} onChange={value => setAddress({ ...address, city:value})}></Field>
            <Field fieldTitle="Zip Code" fieldValue={address.zipcode} onChange={value => setAddress({ ...address, zipcode:value})}></Field>
            <Field fieldTitle="Latitude" fieldValue={geoAddress.lat} onChange={value => setGeoAddress({ ...geoAddress, lat:value})}></Field>
            <Field fieldTitle="Longhitude" fieldValue={geoAddress.lng} onChange={value => setGeoAddress({ ...geoAddress, lng:value})}></Field>
            <Field fieldTitle="Phone Number" fieldValue={phone} onChange={value => setPhone(value)}></Field>
            <Field fieldTitle="Website" fieldValue={website} onChange={value => setWebsite(value)}></Field>
            <Field fieldTitle="Company Name" fieldValue={company.name} onChange={value => setCompany({ ...company, name:value})}></Field>
            <Field fieldTitle="Company Catchphrase" fieldValue={company.catchPhrase} onChange={value => setCompany({ ...company, catchPhrase:value})}></Field>
            <Field fieldTitle="Company BS" fieldValue={company.bs} onChange={value => setCompany({ ...company, bs:value})}></Field>
            <button>Create User</button>
        </form>
    )
}

export default AddUser
