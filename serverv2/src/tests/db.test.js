import {connectToDB, disconnectDB} from '../db/db'

beforeAll(()=>{
    // Initialize the database 
    return connectToDB();
})

afterAll(()=>{
    // Initialize the database 
    return disconnectDB();
})

test('Adding a character',()=>{
    const character={
        meaning:'You',
        pinyin:'ni3',
        character:'你'
    }
})

test('User Creation',()=>{
    const user={
        username:'test user',
        password:'password',
        email:'thapas@beloit.edu'
    }
})

test('User login',()=>{
})

test('User Register',()=>{
})

test('Adding a new character',()=>{

})

test('Modify user settings',()=>{
})

test('Character without any parent',()=>{
})
