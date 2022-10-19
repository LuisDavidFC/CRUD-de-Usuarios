const uuid = require('uuid')

const usersDB = [
    {
        id: '6438461d-b35a-4481-98c4-e0550feb3d2b',
        first_name: 'Luis David',
        last_name: 'Fernandez',
        email: 'ldfernandez@gmail.com',
        password: 'David555',
        birthday: '1998/11/22'
    },
    {
        id: '45b1ebbd-ca98-4b53-8585-74430b25cfa4',
        first_name: 'Lucas',
        last_name: 'Prato',
        email: 'lucas.prato@gmail.com',
        password: 'lucas1234',
        birthday: '2001/05/18'
    },
    {
        id: 'e3566835-17aa-4843-9c14-7df45317f09c',
        first_name: 'Poncio',
        last_name: 'Costa',
        email: 'pocio.costas@gmail.com',
        password: '5683',
        birthday: '2000/11/28'
    },
]

const getAllUsers = () => {
    return usersDB
}

const getUsersById = id => {
    return usersDB.find(user => user.id === id)
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = { getAllUsers, getUsersById, createUser}