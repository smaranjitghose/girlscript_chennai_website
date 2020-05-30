import React, { Component } from 'react';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div>
        {is_visible && (
          <a
            onClick={() => this.scrollToTop()}
            className="gotopbtn clr-wt"
            id="topBtn"
          >
            <i className="fa fa-chevron-up clr-wt"></i>
          </a>
        )}
      </div>
    );
  }
}
