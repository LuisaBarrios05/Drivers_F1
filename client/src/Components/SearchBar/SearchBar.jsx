import { useState } from "react";
import { useDispatch } from "react-redux";
import { Btn, Input } from "./SearchBarStyles";
export default function SearchBar({ getDriversByName }) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleGetDriversByName() {
    dispatch(getDriversByName(name));
    setName("");
  }

  const dispatch = useDispatch();
  return (
    <div>
      <Input
        onChange={handleChange}
        type="search"
        name="search"
        value={name}
        placeholder="Insert name..."
      />
      <Btn onClick={handleGetDriversByName}>Search</Btn>
    </div>
  );
}
