import { useState } from "react";

export function useForm(steps) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length) return;
    setEtapaAtual(i);
  }

  return {
    etapaAtual,
    componenteAtual: steps[etapaAtual],
    changeStep,
    ifPrimeiroPasso: etapaAtual === 0 ? true : false,
    ifUltimoPasso: etapaAtual + 1 === steps.length ? true : false,
  };
}
