const Lee ={
    name:"Lee",
    age:18,
    gender:"Male"
}

const resolvers ={
    Query: {
        person:() => Lee
    }
};

//same as function () {
//     return Lee
//}

export default resolvers