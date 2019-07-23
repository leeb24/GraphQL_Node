import {people,getById} from "./db"


//Query person in graph ql returns an Lee Object 
//args is the provided query arguments 
const resolvers ={
    Query: {
        people:() => { return people },
        person:(_, args) => getById(args.id)
    }
};

//same as function () {
//     return Lee
//}

export default resolvers