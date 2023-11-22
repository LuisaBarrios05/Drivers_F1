import { useEffect, useState } from "react";
import { getTeams, postDrivers } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainerForm,
  LabelForm,
  SubmitBtn,
  TagForm,
  InputForm,
  TeamsContainer,
  BackLink,
} from "./CreateStyles";
import { countries } from "./countries.json";

const Create = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
  });

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams = useSelector((state) => state.teams);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  const handleTeamCheckboxChange = (team) => {
    const isSelected = form.teams.includes(team);

    if (isSelected) {
      // Si el equipo ya está seleccionado, quitarlo de la lista
      setForm({ ...form, teams: form.teams.filter((t) => t !== team) });
    } else {
      // Si el equipo no está seleccionado, agregarlo a la lista
      setForm({ ...form, teams: [...form.teams, team] });
    }
  };

  const handleSubmit = () => {
    dispatch(postDrivers(form));
  };

  //estado de errores, almacena errores.
  const [errors, setErrors] = useState({
    name: "Campo requerido.",
    surname: "Campo requerido.",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "Debe seleccionar al menos un equipo.",
  });

  //validation
  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (value === "") setErrors({ ...errors, name: "Campo requerido" });
        else if (value.length > 20)
          setErrors({ errors, name: "Máximo 20 caracteres." });
        else setErrors({ ...errors, name });
        break;

      case "surname":
        if (value === "") setErrors({ ...errors, surname: "Campo requerido" });
        else if (value.length > 20)
          setErrors({ errors, surname: "Máximo 20 caracteres." });
        else setErrors({ ...errors, surname });
        break;

      case "description":
        break;

      case "image":
        if (value === "") setErrors({ ...errors, image: "Campo requerido" });
        else if (!isValidUrl(value))
          setErrors({ ...errors, image: "URL no válida" });
        else setErrors({ ...errors, image: "" });
        break;

      case "nationality":
        if (value === "")
          setErrors({ ...errors, nationality: "Campo requerido" });
        else setErrors({ ...errors, nationality: "" });
        break;

      case "dob":
        break;

      case "teams":
        if (form.teams.length === 0)
          setErrors({
            ...errors,
            teams: "Debe seleccionar al menos un equipo",
          });
        else setErrors({ ...errors, teams: "" });
        break;

      default:
        break;
    }
  };

  const controlSubmit = () => {
    let aux = true; //que desabilite el botón
    for (let error in errors) {
      if (errors[error] !== "") aux = false;
      else {
        aux = true;
        break;
      }
    }
    return aux;
  };

  return (
    <div>
      <BackLink to="/home">Back Home</BackLink>
      <ContainerForm>
        <TagForm onSubmit={handleSubmit}>
          <LabelForm>Name: </LabelForm>
          <InputForm
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name}

          <LabelForm>Surname:</LabelForm>
          <InputForm
            name="surname"
            type="text"
            value={form.surname}
            onChange={handleChange}
          />
          {errors.surname}

          <LabelForm>Description:</LabelForm>
          <InputForm
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description}

          <LabelForm>Image: </LabelForm>
          <InputForm
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
          />
          {errors.image}

          <div>
            <LabelForm>Nationality: </LabelForm>
            <select
              name="nationality"
              type="text"
              value={form.nationality}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {errors.nationality}

          <LabelForm>Birthday: </LabelForm>
          <InputForm
            name="dob"
            type="text"
            value={form.dob}
            onChange={handleChange}
          />
          {errors.dob}

          <TeamsContainer>
            <LabelForm>Teams:</LabelForm>
            <div>
              <input
                type="checkbox"
                id="selectAllTeams"
                checked={teams.length === form.teams.length}
                onChange={() => handleTeamCheckboxChange("selectAllTeams")}
              />
              <label htmlFor="selectAllTeams">Select All Teams</label>
            </div>
            {teams.map((team) => (
              <div key={team}>
                <input
                  type="checkbox"
                  id={team}
                  value={team}
                  checked={form.teams.includes(team)}
                  onChange={() => handleTeamCheckboxChange(team)}
                />
                <label htmlFor={team}>{team}</label>
              </div>
            ))}
          </TeamsContainer>
          {errors.teams}

          <SubmitBtn disabled={controlSubmit()} type="submit">
            Crear Driver
          </SubmitBtn>
        </TagForm>
      </ContainerForm>
    </div>
  );
};
export default Create;
