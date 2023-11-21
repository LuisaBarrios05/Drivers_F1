import { useState } from "react";
import { validate } from "./validation";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTeamChange = (e) => {
    const selectedTeams = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setForm({ ...form, teams: selectedTeams });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/drivers",
        formData
      );
      console.log("Driver created successfully", response.data);
    } catch (error) {
      console.error("Error creating driver", error);
    }
  };

  //estado de errores, almacena errores.
  const [errors, setErrors] = useState({
    name: "Campo requerido",
    surname: "Campo requerido",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "",
  });

  const controlSubmit = () => {
    let aux = true; //que desabilite el botón
    for (let error in errors) {
      if (errors[error] === "") aux = false;
      else {
        aux = false;
        break;
      }
    }
    return aux;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name}

        <label>Surname:</label>
        <input
          name="surname"
          type="text"
          value={form.surname}
          onChange={handleChange}
        />
        {errors.surname}

        <label>Description:</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
        />
        {errors.description}

        <label>Image: </label>
        <input
          name="image"
          type="url"
          value={form.image}
          onChange={handleChange}
        />
        {errors.image}

        <label>Nationality: </label>
        <input
          name="nationality"
          type="text"
          value={form.nationality}
          onChange={handleChange}
        />
        {errors.nationality}

        <label>Birthday: </label>
        <input
          name="dob"
          type="text"
          value={form.dob}
          onChange={handleChange}
        />
        {errors.dob}

        <label>Teams:</label>
        <select name="teams" value={form.teams} onChange={handleTeamChange}>
          {Teams.map((t) => (
            <option key={t} value={d} />
          ))}
        </select>
        {errors.teams}

        <button name="new_temperament" type="button" onClick={handleChange}>
          Create driver
        </button>
        <input disabled={controlSubmit()} type="submit" />
      </form>
    </div>
  );
};
export default Create;
