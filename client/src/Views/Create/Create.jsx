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

    validate("teams", { ...form, teams: [...form.teams, team] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDrivers(form));

    //recargar
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  //estado de errores, almacena errores.
  const [errors, setErrors] = useState({
    name: "Campo requerido.",
    surname: "Campo requerido.",
    description: "",
    image: "",
    nationality: "",
    dob: "Campo requerido",
    teams: "Debe seleccionar al menos un equipo.",
  });

  // //validation
  // const validate = (name, value) => {
  //   switch (name) {
  //     case "name":
  //       if (value === "") setErrors({ ...errors, name: "Campo requerido" });
  //       else if (value.length > 20)
  //         setErrors({ errors, name: "Máximo 20 caracteres." });
  //       else setErrors({ ...errors, name });
  //       break;

  //     case "surname":
  //       if (value === "") setErrors({ ...errors, surname: "Campo requerido" });
  //       else if (value.length > 20)
  //         setErrors({ errors, surname: "Máximo 20 caracteres." });
  //       else setErrors({ ...errors, surname });
  //       break;

  //     case "description":
  //       break;

  //     case "image":
  //       if (value === "") setErrors({ ...errors, image: "Campo requerido" });
  //       else if (!isValidUrl(value))
  //         setErrors({ ...errors, image: "URL no válida" });
  //       else setErrors({ ...errors, image: "" });
  //       break;

  //     case "nationality":
  //       if (value === "")
  //         setErrors({ ...errors, nationality: "Campo requerido" });
  //       else setErrors({ ...errors, nationality: "" });
  //       break;

  //     case "dob":
  //       break;

  //     case "teams":
  //       if (form.teams.length === 0)
  //         setErrors({
  //           ...errors,
  //           teams: "Debe seleccionar al menos un equipo",
  //         });
  //       else setErrors({ ...errors, teams: "" });
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // Validation
  const validate = (name, value) => {
    const nameRegex = /^.{1,20}$/;
    const surnameRegex = /^.{1,20}$/;
    const imageRegex = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    const dobRegex = /^.{1,}$/;

    switch (name) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: nameRegex.test(value) ? "" : "Máximo 20 caracteres.",
        }));
        break;

      case "surname":
        setErrors((prevErrors) => ({
          ...prevErrors,
          surname: surnameRegex.test(value) ? "" : "Máximo 20 caracteres.",
        }));
        break;

      case "description":
        setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
        break;

      case "image":
        setErrors((prevErrors) => ({
          ...prevErrors,
          image:
            value.trim() === "" || imageRegex.test(value)
              ? ""
              : "URL no válida",
        }));
        break;

      case "nationality":
        break;

      case "dob":
        setErrors((prevErrors) => ({
          ...prevErrors,
          dob: dobRegex.test(value) ? "" : "Campo requerido",
        }));
        break;

      case "teams":
        if (value.teams.length === 0)
          setErrors({
            ...errors,
            teams: "Debe seleccionar al menos un equipo",
          });
        else setErrors({ ...errors, teams: "" });
        break;
      default:
        // setErrors((prevErrors) => ({
        //   ...prevErrors,
        //   teams:
        //     form.teams.length > 0 ? "" : "Debe seleccionar al menos un equipo",
        // }));
        break;
    }
  };

  const controlSubmit = () => {
    let aux = true; //que desabilite el botón
    for (let error in errors) {
      if (errors[error] === "") {
        aux = false;
      } else {
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
            placeholder="Lewis"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <LabelForm>Surname:</LabelForm>
          <InputForm
            name="surname"
            type="text"
            placeholder="Hamilton"
            value={form.surname}
            onChange={handleChange}
          />
          {errors.surname && (
            <span className="error-message">{errors.surname}</span>
          )}

          <LabelForm>Description:</LabelForm>
          <InputForm
            name="description"
            type="text"
            placeholder="He liked vehicles since he was little..."
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}

          <LabelForm>Image: </LabelForm>
          <InputForm
            name="image"
            type="url"
            placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FLewis_Hamilton&psig=AOvVaw2tmE6IUMp7Xmn-fZQooysW&ust=1700796731886000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID1neaX2YIDFQAAAAAdAAAAABAE"
            value={form.image}
            onChange={handleChange}
          />
          {errors.image && (
            <span className="error-message">{errors.image}</span>
          )}

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
          {errors.nationality && (
            <span className="error-message">{errors.nationality}</span>
          )}

          <LabelForm>Birthday: </LabelForm>
          <InputForm
            name="dob"
            type="text"
            placeholder="1985-01-07"
            value={form.dob}
            onChange={handleChange}
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}

          <TeamsContainer>
            <LabelForm>Teams:</LabelForm>
            {/* <div>
              <input
                type="checkbox"
                id="selectAllTeams"
                checked={teams.length === form.teams.length}
                onChange={() => handleTeamCheckboxChange("selectAllTeams")}
              />
              <label htmlFor="selectAllTeams">Select All Teams</label>
            </div> */}
            {teams.map((team) => (
              <div key={team}>
                <input
                  name="teams"
                  type="checkbox"
                  id={team}
                  value={team}
                  onChange={() => handleTeamCheckboxChange(team)}
                />
                <label htmlFor={team}>{team}</label>
              </div>
            ))}
          </TeamsContainer>
          {errors.teams && (
            <span className="error-message">{errors.teams}</span>
          )}

          <SubmitBtn disabled={controlSubmit()} type="submit">
            Create Driver
          </SubmitBtn>
        </TagForm>
      </ContainerForm>
    </div>
  );
};
export default Create;
