import { useState } from "react";
import brasilimg from "./assets/preto.png";
import MaskInput from "react-maskinput";
import CheckCEP from "./CheckCep";

function App() {
  const [cep, setCep] = useState("");
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const validaCep = () => {
    const newErrors = {};

    if (!cep) {
      newErrors.cep = "CEP é obrigatório!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validaCep()) {
      CheckCEP(cep, setData, setErrors);
    }
  };
  return (
    <>
      <form
        className="d-flex justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="d-flex align-items-center text-center justify-content-center mt-5">
            <h1>Busca cep</h1>
            <img src={brasilimg} alt="" height={"100px"} />
          </div>
          <div className="form-group  d-flex align-items-center text-center my-4">
            <label htmlFor="cep" className="form-label me-2">
              Cep
            </label>

            <MaskInput
              alwaysShowMask
              maskChar="_"
              mask="00000-000"
              type="text"
              className={`form-control ${errors.cep ? "is-invalid" : ""}`}
              name="cep"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
              onFocus={(cursor) => {
                setTimeout(() => {
                  cursor.target.setSelectionRange(0, 0);
                }, 50);
              }}
              placeholder="Digite o cep"
            />
            {errors.cep && <div className="invalid-feedback">{errors.cep}</div>}
            <button className="mx-2 btn btn-success" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
      {Object.keys(data).length > 0 && (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p>Cep: {data.cep}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Localidade: {data.localidade}</p>
          <p>UF: {data.uf}</p>
          <p>Região: {data.regiao}</p>
          <p>DDD: {data.ddd}</p>
          <p>Logradouro: {data.logradouro}</p>
        </div>
      )}
    </>
  );
}

export default App;
