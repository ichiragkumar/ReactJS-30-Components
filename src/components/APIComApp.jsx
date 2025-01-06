
import axios from "axios"
import { useState,useEffect } from "react"

export const APICompApp = () => {
    const [todos,setTodos] = useState([])
    async function handleAPisResponse()  {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        if(response){
            setTodos(response.data)
            return response.data
        }
        else{
            return null
        }
    }
    useEffect(() => {
        handleAPisResponse();
    }, []); 
    return (

        <div>
            <button className="p-4 bg-gray-800 text-2xl rounded" onClick={handleAPisResponse}> Get Todods </button>
            {
        todos.map((eachTodo) => {
                            return (
                                <div key={eachTodo.id}>
                                    <p>User ID: {eachTodo.userId}</p>
                                    <p>ID: {eachTodo.id}</p>
                                    <p>Title: {eachTodo.title}</p>
                                    <p>Completed: {eachTodo.completed.toString()}</p>
                                </div>
                            )
                        }
                    )
                    }
        </div>
    )
}