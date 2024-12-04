import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div>
      <GlobalProvider>
        <div>Hello World</div>
        <Header /> 
        <Balance />
        <TransactionForm />
      </GlobalProvider>
    </div>
  );
}

export default App;
