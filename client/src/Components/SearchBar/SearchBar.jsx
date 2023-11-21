import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar({ getDriversByName }) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const dispatch = useDispatch();
  return (
    <div>
      <input
        onChange={handleChange}
        type="search"
        name="search"
        value={name}
        placeholder="Ingrese nombre"
      />
      <button onClick={() => dispatch(getDriversByName(name))}>Search</button>
    </div>
  );
}
