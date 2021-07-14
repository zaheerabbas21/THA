import React, { useState } from "react";
import Form from "./Form";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <div className="calorie-app">
      <Form setItems={setItems} />
      <div className="items">
        <div className="card-item">
          {items.length === 0 ? (
            <h1>Starting Adding Items</h1>
          ) : (
            items.map((item, idx) => {
              return (
                <Item
                  id={idx}
                  setItems={setItems}
                  key={idx}
                  title={item.title}
                  calorieDetail={item.calorieDetail}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
