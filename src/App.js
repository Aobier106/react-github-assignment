import React from "react";
import Counter from "./Counter"; // ✅ Import the missing component
import TextInput from "./TextInput";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div>
      <h1>State and Hooks Assessment</h1>
      <Counter />
      <TextInput />
      <TodoList />
    </div>
  );
}
