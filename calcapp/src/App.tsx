import React, { useState, useEffect } from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

// Components
import Navbar from "./components/Navbar";
import {
  addOperation,
  multiplyOperation,
  squareOperation,
  squareRootOperation,
  log2Operation,
  factorialOperation,
} from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App: React.FC = () => {
  const [valueX, setValueX] = useState<number>(0);
  const [valueY, setValueY] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleMultiply = async () => {
    try {
      await multiplyOperation(valueX, valueY);
      toast.success("Multiplication Operation Done!");
      setResult(valueX * valueY);
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while performing multiplication:", error);
      toast.error("Error while performing multiplication");
    }
  };

  const handleAdd = async () => {
    try {
      await addOperation(valueX, valueY);
      toast.success("Addition Operation Done!");
      setResult(valueX + valueY);
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while performing addition:", error);
      toast.error("Error while performing addition");
    }
  };

  const handleSquare = async () => {
    try {
      await squareOperation(valueX);
      toast.success("Square Operation Done!");
      setResult(valueX * valueX);
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while squaring:", error);
      toast.error("Error while squaring");
    }
  };

  const handleSquareRoot = async () => {
    try {
      await squareRootOperation(valueX);
      toast.success("Square Root Operation Done!");
      setResult(Math.sqrt(valueX));
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while taking square root:", error);
      toast.error("Error while taking square root");
    }
  };

  const handleFactorial = async () => {
    try {
      await factorialOperation(valueX);
      let result = 1;
      for (let i = 1; i <= valueX; i++) {
        result *= i;
      }
      toast.success("Factorial Operation Done!");
      setResult(result);
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while calculating factorial:", error);
      toast.error("Error while calculating factorial");
    }
  };

  const handleLog2 = async () => {
    try {
      await log2Operation(valueX);
      toast.success("Log Base 2 Operation Done!");
      setResult(Math.log2(valueX));
      setTimeout(() => window.location.reload(), 7000);
    } catch (error) {
      console.error("Error while calculating log base 2:", error);
      toast.error("Error while calculating log base 2");
    }
  };

  // Set players and tickets remaining
  // useEffect(() => {
  //   // TODO 9 - Fetch players and tickets remaining from storage
  //   const fetchData = async () => {
  //     const storage = await fetchStorage();

  //     if (storage) {
  //       setPlayers(storage.players);
  //       setTickets(storage.tickets_available);
  //     } else {
  //       console.error(
  //         "Error: Storage data is missing or in an unexpected format."
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);

  // TODO 7.a - Complete onBuyTicket function
  // const onBuyTicket = async () => {
  //   try {
  //     setLoading(true);
  //     await buyTicketOperation();
  //     toast.success("You have bought a ticket!");
  //     setTimeout(() => window.location.reload(), 6000);
  //   } catch (error) {
  //     console.error("Error while buying a ticket:", error);
  //     toast.error("Failed to buy ticket. Please try again.");
  //   }
  //   setLoading(false);
  // };

  // TODO 11.a - Complete onEndGame function
  // const onEndGame = async () => {
  //   try {
  //     setLoading(true);
  //     await endGameOperation();
  //     toast.success("The game has ended!");
  //     setTimeout(() => window.location.reload(), 6000);
  //   } catch (error) {
  //     console.error("Error while ending the game:", error);
  //     toast.error("Failed to end game. Please try again.");
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <Navbar />
      < ToastContainer position="bottom-right" draggable pauseOnHover />  
      <div className="calculator-container">
        <h2>Calculator</h2>
        <div className="input-section">
          <label>
            Value X:
            <input
              type="number"
              value={valueX}
              onChange={(e) => setValueX(parseFloat(e.target.value))}
            />
          </label>
          <label>
            Value Y:
            <input
              type="number"
              value={valueY}
              onChange={(e) => setValueY(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <div className="button-section">
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSquare}>Square</button>
          <button onClick={handleSquareRoot}>Square Root</button>
          <button onClick={handleFactorial}>Factorial</button>
          <button onClick={handleLog2}>Log Base 2</button>
        </div>
        <div className="result-section">Result: {result}</div>
      </div>
    </>
  );
};

export default App;
