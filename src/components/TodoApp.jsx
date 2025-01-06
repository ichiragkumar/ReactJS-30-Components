import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title && description) {
      setTodos([...todos, { title, description }]); 
      setTitle("");
      setDescription("");
    } else {
      alert("Both fields are required!");
    }
  }

  function deleteTodo(todoId) {
    const updatedTodos = todos.filter((todo, index) => index !== todoId);
    setTodos(updatedTodos);
  }
  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4 font-bold text-center">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Todo
        </button>
      </form>
      <div className="space-y-4">
      {todos.length > 0 ? (
                todos.map((eachtodo, index) => (
                <div key={index} className="p-4 border rounded shadow">
                    <div className="font-semibold">Title: {eachtodo.title}</div>
                    <div>Description: {eachtodo.description}</div>
                     <button
                        onClick={() => deleteTodo(index)}
                        className="text-red-500 underline mt-2"
                        >
                        Delete
                        </button>
                </div>
                ))
            ) : (
                <p className="text-center">No todos added yet.</p>
            )}
      </div>
    </div>
  );
};
