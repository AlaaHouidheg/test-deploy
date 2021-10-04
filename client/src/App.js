import "./App.css";

import { AddContact } from "./AddContact";
import { List } from "./List";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [contas, setcontas] = useState([]);
  const [ping, setPing] = useState(false);

  useEffect(() => {
    let x = axios.get("http://localhost:5000/contacts");

    setcontas(x);
  }, []);
  console.log(contas);
  return (
    <div className='App'>
      <AddContact setPing={setPing} ping={ping} />
      fefef
      <List setPing={setPing} ping={ping} />
    </div>
  );
}

export default App;
