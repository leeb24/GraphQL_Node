const Lee ={
    name:"Lee",
    age:18,
    gender:"Male"
}


//Query person in graph ql returns an Lee Object 

const resolvers ={
    Query: {
        person:() => Lee
    }
};

//same as function () {
//     return Lee
//}

export default resolvers