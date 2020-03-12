import React from "react";
import * as moment from "moment";

const ToDoItem = props => {
  const timeStamp = props.item.id;
  const formatted = moment(timeStamp).format("LLLL");
  return (
    <div>
      <div
        onClick={() => props.checkItem(props.item.id)}
        className={`item ${props.item.checked ? "checked" : ""}`}
      >
        {props.item.name}{" "}
        <span className="timetag">made {moment(formatted).fromNow()}</span>
      </div>
    </div>
  );
};

export default ToDoItem;
