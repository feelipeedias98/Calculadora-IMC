# Calculadora-IMC
Projeto desenvolvido em React Native com o objetivo de praticar conceitos fundamentais da construção de interfaces e lógica de programação. Esta aplicação permite que o usuário calcule seu IMC (Índice de Massa Corporal) com base no peso e altura informados, fornecendo uma classificação personalizada de acordo com o resultado.

# 🧮 Calculadora de IMC – React Native

Este é um projeto desenvolvido em **React Native** com o objetivo de praticar conceitos fundamentais de desenvolvimento mobile, incluindo o uso de **hooks (`useState`)**, manipulação de **entradas do usuário**, **renderização condicional** e lógica de programação para o cálculo do **IMC (Índice de Massa Corporal)**.

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- Hook `useState`
- Componentes nativos: `View`, `Text`, `TextInput`, `Button`
- Estilização com `StyleSheet`
- Estruturas `if/else` para classificação

---

## ✨ Funcionalidades

- ✅ Entrada de **peso (kg)** e **altura (m)**.
- ✅ Cálculo do IMC com a fórmula `IMC = peso / (altura * altura)`.
- ✅ Classificação automática:
  - **Abaixo de 18.5** → Abaixo do peso
  - **18.5 a 24.9** → Peso normal
  - **25 a 29.9** → Sobrepeso
  - **30 ou mais** → Obesidade
- ✅ Botão **Calcular**
- ✅ Botão **Limpar campos**

---

## 📦 Instalação e execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc-react-native.git
   cd calculadora-imc-react-native
   
2. Instale as dependências:
   npm install
   
3. Rode o projeto:
   npx expo start

🧠 Aprendizados
Este projeto me ajudou a fixar:

* O funcionamento do useState
* A captura e validação de entradas com TextInput
* Como trabalhar com eventos (onChangeText, onPress)
* Como fazer cálculos e renderizar resultados de forma dinâmica no React Native

