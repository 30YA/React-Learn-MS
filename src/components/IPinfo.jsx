import { Component } from "react";
import { RotatingLines } from "react-loader-spinner";

export default class IPinfo extends Component {
  state = {
    info: null,
    isLoading: true,
  };
  async getIP() {
    const respons = await fetch("https://api.ipify.org?format=json");
    return (await respons.json()).ip;
  }
  async getInfo() {
    const ip = await this.getIP();
    const respons = await fetch(`http://ipwho.is/${ip}`);
    return await respons.json();
  }
  componentDidMount() {
    this.getInfo().then((data) => {
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }
  render() {
    return (
      <>
        {this.state.isLoading && <RotatingLines width="100" />}
        {!this.state.isLoading && (
          <div className="card-container">
            <span className="info">Info</span>
            <img className="round" src={this.state.info.flag.img} alt={this.state.info.country} />
            <h3>{this.state.info.country}</h3>
            <h6>{this.state.info.city}</h6>
            <p>ISP: {this.state.info.connection.isp}</p>
            <div className="footer">
              <p>IP: {this.state.info.ip}</p>
              <p>latitude: {this.state.info.latitude}</p>
              <p>longitude: {this.state.info.longitude}</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
