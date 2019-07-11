import React from "react";

function PlaceList() {
  return (
    <React.Fragment>
      <div className="todo-box">
        <h1>Todo App</h1>
        <p>
          Ex fugiat velit aliquip ea cillum Lorem officia. Dolore mollit
          consectetur ullamco irure dolor id excepteur nisi magna. Reprehenderit
          aute excepteur.
        </p>
        <ul>
          <li>
            <input type="checkbox" />
            Swimming Class
          </li>
          <li>
            <input type="checkbox" />
            Programming Class
          </li>     
          <li>
            <input type="checkbox" />
            French Class
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default PlaceList;
