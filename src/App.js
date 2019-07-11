import React, { Component } from "react";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import TimeAlert from "./components/TimeAlert";
import Joke from "./components/Joke";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TimeAlert />
        <TodoList />
        <Footer />
        <Joke data={{ question: "How old are you", punchline: "Shut up" }} />
        <Joke
          data={{
            question: "How long have you lived in Paris",
            punchline: "1 year"
          }}
        />
        <Joke data={{ punchline: "20" }} />
        <Joke data={{ question: "How old are you4", punchline: "23" }} />
        <Joke data={{ question: "How old are you5", punchline: "26" }} />
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
