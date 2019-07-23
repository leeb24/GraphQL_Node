import {people,getById,getMovies,deleteMovie,movies,getMovie,addMovie} from "./db"


//Query person in graph ql returns an Lee Object 
//args is the provided query arguments 
const resolvers ={
    Query: {
        people:() => { return people },
        person:(_, args) => getById(args.id),

        movies:() => getMovies(),
        movie:(_,args) => getMovie(args.id)

    },
    Mutation:{
        addMovie:(_,{name,score}) => addMovie(name,score)
    }
};

//same as function () {
//     return Lee
//}

export default resolvers