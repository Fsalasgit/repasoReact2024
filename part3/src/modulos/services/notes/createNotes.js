import axios from "axios";

export const createNotes = ({id, title, userId}) => {

    return  axios.post('https://jsonplaceholder.typicode.com/posts', {id, title, userId})
         .then(response => {
             const {data} = response
             return data
         })
}