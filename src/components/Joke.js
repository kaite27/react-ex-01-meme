import React from "react";

export default class Joke extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     defaultQst: "No question"
  //   };
  // }

  state = {
    defaultQst: "No question"
  };

  render() {
    let { data } = this.props; // this.props.data = data 라고 지정해
    return (
      <React.Fragment>
        <ul>
          {/* data = null 이면 display 표기 제외 예시의 경우  */}
          {/* <li style={{display: data.question ? "block" : "none"}}>...</li>  또는 */}
          {/* <li style={{display: !data.question && "none"}}>...</li> */}
          {data.question ? (
            <li>PunchLine : {data.question}</li>
          ) : (
            <li>PunchLine : {this.state.defaultQst}</li>
          )}
          <li>PunchLine : {data.punchline}</li>
        </ul>
      </React.Fragment>
    );
  }
}
