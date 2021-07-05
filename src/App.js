import { useEffect, useState } from "react";
import "./styles.css";
// rename imports
import { ColorList as Colors } from "./Colors.js"; //. refers to current directory
import { Users } from "./Users.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// rename normal way in default
// import Good from  "./Users.js";

// Two types of component - function & class (old)
// function component
// function useState1(initalvalue){
//   let state = initalvalue;
//   function fn(value){
//     state = value
//   }

//   return [state, fn];
// }

export default function App() {
  const defaultColors = [
    "Pink",
    "orange",
    "blue",
    "teal",
    "cyan",
    "papayawhip"
  ];
  const [colors, setColors] = useState(defaultColors);

  useEffect(() => {
    // console.log("Something changed", color, newColor);
    return () => {
      console.log("Destroyed");
    };
  });

  return (
    <main
      className="App"
      style={{ display: "flex", gap: "10px", flexDirection: "column" }}
    >
      <Welcome />
      <ChangeColor />
      <AddColorToList setColors={setColors} colors={colors} />
      <Colors colors={colors} setColors={setColors} />
      <Users />
    </main>
  );
  // jsx ends here
}

function Welcome() {
  const [name, nameChange] = useState("");
  // getter setter
  const [rollNo, setRollNo] = useState();
  const updateName = (event) => nameChange(event.target.value);
  const updateRollNo = (event) => setRollNo(event.target.value);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Enter name"
        variant="outlined"
        onChange={updateName}
      />
      <TextField
        id="outlined-basic"
        label="Enter roll no."
        variant="outlined"
        onChange={updateRollNo}
      />
      {/* Task is to not show any message when there is no name */}
      {/* Clue is that inside braces the expression would be evaluated */}
      {/* ternary operator condition? <true> : <false> */}
      {/* Interpolation */}
      {name ? (
        <p>
          Hi {name}!! Welcome to Guvi. {name} ({rollNo}) nice day.
        </p>
      ) : (
        ""
      )}
    </>
  );
}

// Refactor into components and into different files
// Search box to filter by recipe name
// Delete recipes

var student = {
  name: "John Doe",
  age: 16,
  scores: {
    name: "Unit Test",
    maths: 74,
    english: 63
  }
};

function ChangeColor() {
  const [color, setColor] = useState("orange");
  return (
    <>
      <Button
        onClick={() => setColor(color === "orange" ? "grey" : "orange")}
        variant="outlined"
        color="primary"
      >
        Change the color of the div orange to grey to orange
      </Button>

      {/* backgroundColor state */}
      <div
        style={{
          backgroundColor: color,
          height: "25px",
          width: "100px",
          marginTop: "5px",
          marginBottom: "5px"
        }}
      ></div>
    </>
  );
}

function AddColorToList({ setColors, colors }) {
  const [newColor, setNewColor] = useState("");
  return (
    <>
      <p> Add the color to the bottom of the list </p>

      <TextField
        id="outlined-basic"
        label="Enter a color"
        value={newColor}
        onChange={(event) => setNewColor(event.target.value)}
        variant="outlined"
      />

      <Button
        onClick={() => {
          setColors([...colors, newColor]);
          setNewColor("");
        }}
        variant="outlined"
        color="primary"
      >
        Add Color
      </Button>
    </>
  );
}
// var { name, age } = student;

// var {
//   name: studentName,
//   age,
//   scores: { name, maths, tamil = 80 }
// } = student;

// console.log(studentName, name);

// File > export as zip
// extract the folder & open the contents of the folder in vscode
// npm install (if does not work yarn install)
// npm start
