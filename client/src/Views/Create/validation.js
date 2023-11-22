// export const validate = (name, value) => {
//   switch (name) {
//     case name:
//       if (value === "") setErrors({ ...errors, name: "Campo requerido" });
//       else if (value.length > 20)
//         setErrors({ errors, name: "Máximo 20 caracteres." });
//       else setErrors({ ...errors, name });
//       break;

//     case surname:
//       if (value === "") setErrors({ ...errors, surname: "Campo requerido" });
//       else if (value.length > 20)
//         setErrors({ errors, surname: "Máximo 20 caracteres." });
//       else setErrors({ ...errors, surname });
//       break;

//     case description:

//     case image:
//       if (value === "") errors = { ...errors, image: "Campo requerido" };
//       else if (!isValidUrl(value))
//         errors = { ...errors, image: "URL no válida" };
//       else errors = { ...errors, image: "" };
//       break;

//     case nationality:
//       if (value === "") errors = { ...errors, nationality: "Campo requerido" };
//       else errors = { ...errors, nationality: "" };
//       break;

//     case dob:
//       if (!isValidDate(value)) errors = { ...errors, dob: "Fecha no válida" };
//       else errors = { ...errors, dob: "" };
//       break;

//     case teams:
//       if (teams.length === 0)
//         errors = { ...errors, teams: "Debe seleccionar al menos un equipo" };
//       else errors = { ...errors, teams: "" };
//       break;

//     default:
//       break;
//   }
// };
