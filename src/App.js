import React, { Component } from "react";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoList />
        <Footer />
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <PlaceList />
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default App;
