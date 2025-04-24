import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setResultado('Abaixo do peso');
      setMensagem('Seu IMC indica que você está abaixo do peso ideal.Procure um nutricionista para orientação sobre uma dieta nutritiva e balanceada. Hidrate-se bem, pratique exercícios leves e priorize alimentos ricos em nutrientes para promover ganho de peso saudável. Cuide também do seu bem-estar emocional.');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setResultado('Peso normal');
      setMensagem('Parabéns! Seu IMC está dentro do ideal. Continue mantendo uma alimentação equilibrada, praticando atividades físicas regularmente e hidratando-se bem. Cuide da sua saúde mental também!');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setResultado('Sobrepeso');
      setMensagem('Atenção ao seu peso! Procure revisar sua alimentação, aumentar a prática de atividades físicas e reduzir alimentos ultraprocessados. Um nutricionista pode te ajudar com um plano alimentar personalizado.');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9){
      setResultado('Obesidade 1');
      setMensagem('Este é um sinal de alerta! Recomenda-se acompanhamento com um nutricionista e/ou endocrinologista. Pequenas mudanças no dia a dia, como caminhar mais e fazer trocas alimentares inteligentes, já fazem diferença.');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9){
      setResultado('Obesidade 2');
      setMensagem('Cuide da sua saúde com atenção redobrada!Além de acompanhamento nutricional e médico, considere apoio psicológico. Mudanças de estilo de vida são essenciais para evitar doenças relacionadas ao excesso de peso.')
    } else {
      setResultado('Obesidade 3');
      setMensagem('Sua saúde está em risco!Procure uma equipe multidisciplinar com urgência (médico, nutricionista, psicólogo). A obesidade severa exige atenção, mas com apoio e persistência é possível melhorar sua qualidade de vida!');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder='Ex: 70'
        />
      </div>
      <div>
        <label>Altura (metros):</label>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ex: 1.75"
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>{resultado}</p>
          <p className={`mensagem ${resultado}`}>{mensagem}</p>
        </div>
      )}
    </div>
  );
}

export default App;