import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Countdown extends Component {

  static propTypes = {
    datetime: PropTypes.string
  }

  isCancelled = false;

  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    this.updateTimer();
  }

  componentDidUpdate () {
    this.updateTimer();
  }

  componentWillUnmount () {
    this.isCancelled = true;
  }


  updateTimer = () => {
    if (this.isCancelled) return;

    setTimeout(() => {
      this.setState(this.getCurrentCountdown);
    }, 1000);
  }

  getCurrentCountdown = () => {
    const { datetime } = this.props;

    const countDownDate = new Date(datetime);

    const now = new Date();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  renderDays = () => {
    const { days } = this.state;
    return (
      <span className="countdown__colum">
        <span className="countdown__amount">{days}</span>
        <span className="countdown__period">Dias</span>
      </span>
    );
  }

  renderHours = () => {
    const { hours } = this.state;
    return (
      <span className="countdown__colum">
        <span className="countdown__amount">{hours}</span>
        <span className="countdown__period">Horas</span>
      </span>
    );
  }

  renderMinutes = () => {
    const { minutes } = this.state;
    return (
      <span className="countdown__colum">
        <span className="countdown__amount">{minutes}</span>
        <span className="countdown__period">Minutos</span>
      </span>
    );
  }

  renderSeconds = () => {
    const { seconds } = this.state;
    return (
      <span className="countdown__colum">
        <span className="countdown__amount">{this.state.seconds}</span>
        <span className="countdown__period">Segundos</span>
      </span>
    );
  }

  render() {
    return (
      <div className="countdown">
        {this.renderDays()}
        {this.renderHours()}
        {this.renderMinutes()}
        {this.renderSeconds()}
      </div>
    )
  }
}

export default Countdown
