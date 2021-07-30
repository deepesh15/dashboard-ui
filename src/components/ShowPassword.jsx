import React from "react";
import ShowIcon from '../svg/ShowIcon.svg';
import  HideIcon from '../svg/HideIcon.svg';
class ShowPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input",
    });
  }
  
  
  
  render() {
    return (
      <div className="show-password">
        <input type={this.state.type}/>
        <span className="password__show" onClick={this.showHide}>
          {this.state.type === "input" ? <img src={HideIcon} alt="hide"/>:<img src={ShowIcon} alt="show"/>}
        </span>
      </div>
    );
  }
}

export default ShowPassword;
//   ReactDOM.render(<ShowPassword/>, document.getElementById('react'));
