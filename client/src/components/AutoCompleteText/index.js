import React from 'react';

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ['David', 'Damien', 'Sara', 'Jane'];
    this.state = {
      suggestions: []
    };
  }

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length === 0) {
      this.setState(() => ({
        suggestions: []
      }));
    } else {
      const regex = new RegExp(`^${value}`, 'i');
      const suggestions = this.items.sort().filter(v => v.test(regex));
      this.setState(() => ({
        suggestions
      }));
    }
  };

  render() {
    return (
      <div>
        <input onChange={e => console.log(e.target.value)} type="text" />
        <ul>
          {this.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
