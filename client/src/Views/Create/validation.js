export const validate = (form, name) => {
  switch (name) {
    case name:
      if (form.name === "") setErrors({ ...errors, name: "Campo requerido" });
      else if (form.name.length > 20)
        setErrors({ errors, name: "Máximo 20 caracteres." });
      else setErrors({ ...errors, name });
      break;

    case surname:
      if (form.surname === "")
        setErrors({ ...errors, surname: "Campo requerido" });
      else if (form.surname.length > 20)
        setErrors({ errors, surname: "Máximo 20 caracteres." });
      else setErrors({ ...errors, surname });
      break;

    case description:

    case image:
      if (form.image === "") errors = { ...errors, image: "Campo requerido" };
      else if (!isValidUrl(form.image))
        errors = { ...errors, image: "URL no válida" };
      else errors = { ...errors, image: "" };
      break;

    case nationality:
      if (form.nationality === "")
        errors = { ...errors, nationality: "Campo requerido" };
      else errors = { ...errors, nationality: "" };
      break;

    case dob:
      if (!isValidDate(form.dob))
        errors = { ...errors, dob: "Fecha no válida" };
      else errors = { ...errors, dob: "" };
      break;

    case teams:
      if (form.teams.length === 0)
        errors = { ...errors, teams: "Debe seleccionar al menos un equipo" };
      else errors = { ...errors, teams: "" };
      break;

    default:
      break;
  }
};
