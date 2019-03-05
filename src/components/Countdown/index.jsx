import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.getCurrentCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  stop() {
    clearInterval(this.interval)
  }

  getCurrentCountdown = (date) => {
    let diff = (Date.parse(new Date(date)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.minutes = Math.floor(diff / 60)
      diff -= timeLeft.minutes * 60
    }
    timeLeft.seconds = diff

    return timeLeft
  }

  render() {
    const { days, hours, minutes, seconds } = this.state

    return (
      <div className="countdown">
        <span className="countdown__colum">
          <span className="countdown__amount">{days}</span>
          <span className="countdown__period">Dias</span>
        </span>
        <span className="countdown__colum">
          <span className="countdown__amount">{hours}</span>
          <span className="countdown__period">Horas</span>
        </span>
        <span className="countdown__colum">
          <span className="countdown__amount">{minutes}</span>
          <span className="countdown__period">Minutos</span>
        </span>
        <span className="countdown__colum">
          <span className="countdown__amount">{seconds}</span>
          <span className="countdown__period">Segundos</span>
        </span>
      </div>
    )
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
}

Countdown.defaultProps = {
  date: new Date(),
}
