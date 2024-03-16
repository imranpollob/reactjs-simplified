/* eslint-disable react/prop-types */
const Todo = ({ index, todo, deleteTodo }) => {
  return (
    <li key={index} className="list-item">
      <label className="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>{todo}</span>
      </label>
      <button data-button-delete onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};
 
export default Todo;