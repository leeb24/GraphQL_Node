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

export var  movies = [  
    {
    id : 0,
    name: "Star Wars",
    score: 100
    },
    {
        id : 1,
        name: "Avatar",
        score: 70
    },
    {
        id : 2,
        name: "End Game",
        score: 99
    }
    ,
    {
        id : 3,
        name: "End Game-2",
        score: 99
    }
]

export const getById = (id) =>{
    const filteredPerson = people.filter(person=> id === person.id)
    return filteredPerson[0]
}

export const deleteMovie = (id) =>{

    const filteredMovies = movies.filter(movie => movie.id !== id )
    if(movies.length  > filteredMovies.length){
        movies = cleanedMovies
        return True 
    }
    else{
        return false
    }
}

export const getMovie = (id)=> {
    const filteredMovies = movies.filter(movie => movie.id == id)
    return filteredMovies[0] 
}

export const getMovies = ( ) => { return movies }

export const addMovie = (name,score ) =>  {
    const newMovie ={
        id:`${movies.length+1}`,
        name:name,
        score:score
    }

    movies.push(newMovie)

    return newMovie

}