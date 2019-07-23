export const people =[
    {
        name:"Lee",
        age:18,
        gender:"Male",
        id:1
    },
    {
        name:"John",
        age:26,
        gender:"Male",
        id:2
    },
    {
        name:"Doe",
        age:24,
        gender:"Female",
        id:3
    }
]

export const getById = (id) =>{
    const filteredPerson = people.filter(person=> id === person.id)
    return filteredPerson[0]
}