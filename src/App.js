import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext("BLACK");
// export const value = useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState("BLACK");
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(theme === "BLACK" ? "RED" : "BLACK")}>
          Смена Темы
        </button>
        <LabelBox value="Class component" />
        <LabelBox2 value="Hook component" />
      </ThemeContext.Provider>
    </div>
  );
}

export class LabelBox extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return <p className={this.context}>{this.props.value}</p>;
  }
}

function LabelBox2(props) {
  const value = useContext(ThemeContext);
  return <p className={value}>{props.value}</p>;
}

export default App;
