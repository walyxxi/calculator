import { useState } from 'react';
import './App.css';

const operationList = [
  {
    label: "+",
    value: "plus"
  },
  {
    label: "-",
    value: "minus"
  },
  {
    label: "×",
    value: "times"
  },
  {
    label: "/",
    value: "divided"
  }
];

function App() {
  const [inputList, setInputList] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [countResult, setCountResult] = useState(0);
  const { input1, input2, input3, checkbox1, checkbox2, checkbox3 } = inputList;

  const handleChangeInputValue = (e) => {
    setInputList({ ...inputList, [e.target.name]: e.target.value });
  };

  const handleChangeCheckboxValue = (e) => {
    setInputList({ ...inputList, [e.target.name]: e.target.checked });
  };

  const handleCount = (e) => {
    let countCheckbox = 0;
    let result = null;
    
    for (let i = 1; i <= 3; i++) {
      if (inputList[`checkbox${i}`]) {
        countCheckbox += 1;
        if (result === null) result = parseFloat(inputList[`input${i}`]);
        else if (e.target.value === "plus") result += parseFloat(inputList[`input${i}`]);
        else if (e.target.value === "minus") result -= parseFloat(inputList[`input${i}`]);
        else if (e.target.value === "times") result *= parseFloat(inputList[`input${i}`]);
        else result /= parseFloat(inputList[`input${i}`]);
      };
    };

    if (countCheckbox === 0 || countCheckbox === 1) {
      alert("Select minimum 2 input!");
    } else {
      setCountResult(result || 0);
    }
  };

  return (
    <div className="App">
      <h3>CALCULATOR</h3>
      <div className="App-Content">
        <div className="input-list">
          <div className="input-group">
            <input type="number" name="input1" value={input1} onChange={handleChangeInputValue} />
            <input type="checkbox" name="checkbox1" checked={checkbox1} onChange={handleChangeCheckboxValue} />
          </div>
          <div className="input-group">
            <input type="number" name="input2" value={input2} onChange={handleChangeInputValue} />
            <input type="checkbox" name="checkbox2" checked={checkbox2} onChange={handleChangeCheckboxValue} />
          </div>
          <div className="input-group">
            <input type="number" name="input3" value={input3} onChange={handleChangeInputValue} />
            <input type="checkbox" name="checkbox3" checked={checkbox3} onChange={handleChangeCheckboxValue} />
          </div>
        </div>
        <div className="button-list">
          {operationList.map((item, idx) => (
            <button key={idx} value={item.value} onClick={handleCount}>{item.label}</button>
          ))}
        </div>
        <hr />
        <div className="input-result">
          <div>Hasil :</div>
          <div>{countResult === Infinity ? "∞" : countResult}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
