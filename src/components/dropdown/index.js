import React from 'react';
import Input from './../../utils/input';
import InputValidation from './../../utils/input/validation';

class DropdownComponent extends React.Component {

  static defaultProps = { resource_key: 'id' }

  render() {
    var optionClassName = "ui-dropdown__option";

    var options = this.props.options.map((option) => {
      return  <option
                key={ option.get('name') + option.get('id') } 
                value={ option.get(this.props.resource_key) }
                className={ optionClassName }
              >
                { option.get('name') }
              </option>;
    });

    return(
      <select
        className={ this.props.input.mainClasses() }
        onBlur={ this.props.validation.handleBlur }
        onFocus={ this.props.validation.handleFocus }
        { ...this.props.input.inputProps() }
      >
        { options }
      </select>
    )
  };
}

export default InputValidation(Input(DropdownComponent))