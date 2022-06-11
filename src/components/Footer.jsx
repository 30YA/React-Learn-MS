import { Component } from 'react';

class Footer extends Component {
  state = {
      input: "",
  };
  handleInput = (e) => {
      this.setState({
          input: e.target.value
      })
  }
  handleClick = () => {
      this.props.handleSubmit(this.state.input);
      this.setState({
        input: ""
      })

  }
  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Say something" value={this.state.input} onChange={this.handleInput}/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.handleClick}>Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Footer;
