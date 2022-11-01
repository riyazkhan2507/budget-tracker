import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle("updated");
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          <button onClick={clickHandler}>Click</button>
        </div>
      </Card>
    </li>
  );
}
