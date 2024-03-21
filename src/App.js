import "./App.css";
import { BalanceDisplay } from "./Components/BalanceDisplay";
import { Heading } from "./Components/Heading";
import { IncomeExpenseDisplay } from "./Components/IncomeExpenseDisplay";
import { History } from "./Components/History";
import { Transaction } from "./Components/Transaction";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Heading />
        <BalanceDisplay />
        <IncomeExpenseDisplay />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
