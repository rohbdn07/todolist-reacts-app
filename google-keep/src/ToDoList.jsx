import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
import { useState } from "react";

const ToDOList = () => {
  const [item, setItem] = useState("");
  const [newitem, setnewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const ListOfItems = () => {
    setnewItem((prevValue) => {
      return [...prevValue, item];
    });

    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={ListOfItems}>
            <AddIcon />
          </Button>

          <br />

          <ol>
            {newitem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>

          <br />
        </div>
      </div>
    </>
  );
};

export default ToDOList;
