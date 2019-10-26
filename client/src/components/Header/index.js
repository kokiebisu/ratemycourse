import React from 'react';
import './header.scss';
import AutoCompleteText from '../AutoCompleteText';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Object Oriented Programming 2', 'Relational Database']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(random) {}
  render() {
    return (
      <>
        <section className="header__container">
          <div className="headerboard__container">
            <div className="headerboard">
              <h3 className="headerboard__heading">
                Learn about the course. <br />
                Don't waste your time.
              </h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Header;
