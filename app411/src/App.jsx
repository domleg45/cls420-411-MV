import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import { t } from "i18next";

function App() {

  const handleButtonClick = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  };

  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    age: "",
    alias: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleButtonClick}>
        ­<FormInput name="nom" label="Entrez votre nom" placeholder="nom" onChange={onChange}/>
        <FormInput name="prenom" label="Entrez votre prénom" placeholder="prénom" onChange={onChange}/>
        <FormInput name="age" label="Entrez votre âge" placeholder="âge" onChange={onChange}/>
        <FormInput name="alias" label="Entrez votre alias" placeholder="alias" onChange={onChange}/>
        <button className="btn btn-open">
          {t("open")}
        </button>
      </form>
    </div>
  );
}

export default App;
