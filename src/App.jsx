import "./App.css";
// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const {
    etapaAtual,
    componenteAtual,
    changeStep,
    ifUltimoPasso,
    ifPrimeiroPasso,
  } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixa sua avaliação</h2>
        <p>
          Muito obrigado por comprar conosco, por favor use o formulário abaixo
          para avaliar o produto e ganhar desconto
        </p>
      </div>
      <div className="form-container">
        <Steps etapaAtual={etapaAtual} />
        <form onSubmit={(e) => changeStep(etapaAtual + 1, e)}>
          <div className="inputs-container">{componenteAtual}</div>
          <div className="actions">
            {!ifPrimeiroPasso ? (
              <button type="button" onClick={() => changeStep(etapaAtual - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            ) : (
              <></>
            )}
            {!ifUltimoPasso ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
