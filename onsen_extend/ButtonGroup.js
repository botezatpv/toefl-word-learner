import React, {Component} from 'react';

/**
 * Class that create button group
 * @namespace ButtonGroup
 * @memberof Component
 * @example
 * <ButtonGroup
 *   label={['LLLN', 'LLL', 'LN']}
 *   groupId={'phases'}
 *   value={[3, 2]}
 *   onClick={this.myaction}
 * />
 */
class ButtonGroup extends Component {
  /**
   * Create Button Group
   * @param {Object} props - data that passed when called
   * @param {!string} props.groupId - unique identifire for button group
   * @param {!string[]} props.label - each string in array represent one button
   * @param {function} [props.onClick] - function that execute when you click on
   * button from button group
   */
  constructor(props) {
    super(props);
    /**
     * Assigning lable string[] to lable property.
     */
    this.label = props.label;
    /**
     * Assigning groupId string to groupId property.
     */
    this.groupId = props.groupId;
    this.currentValue = props.currentValue;
    /**
     * Assigning onClick function to onClick porperty.
     */
    this.onClick = props.onClick;
    this.onButtonClick = this.onButtonClick.bind(this);
    this.errorThrower = this.errorThrower.bind(this);
    this.i = 0;
  }

  /**
   * Check if onClick property is empty
   * @return {function} onClick
   */
  onButtonClick(value, label, e) {
    const buttonGroupEvent = {
      activeButton: e.target.value,
      label: label,
      buttonId: value
    };
    if (this.onClick != null) {
      return this.onClick(buttonGroupEvent);
    }
  }

  /**
   * @throw {message} throw error when number of labels != number of values
   */
  errorThrower(message) {
    throw message;
  }
  /**
   * Draw button group.
   * @return {Object} ButtonGroup
   */
  render() {
    if (this.label.length === this.props.value.length) {
      return (
        <div className='button-bar'>
          { Object.keys(this.label).map((value, key) =>
            (this.label[key] === this.currentValue ||
              this.props.value[key] === this.currentValue)
            ? <div className='button-bar__item' key={value + key}>
              <input
                type='radio'
                name={this.groupId}
                className='button-bar__input'
                onClick={this.onButtonClick.bind(this, value, this.label[key])}
                value={this.props.value[key]}
                defaultChecked = {true}
                />
              <button
                className='button-bar__button'
              >
                {this.label[key]}
              </button>
            </div> : <div className='button-bar__item' key={value + key}>
              <input
                type='radio'
                name={this.groupId}
                className='button-bar__input'
                onClick={this.onButtonClick.bind(this, value, this.label[key])}
                value={this.props.value[key]}
                />
              <button
                className='button-bar__button'
              >
                {this.label[key]}
              </button>
            </div>
          )}
        </div>
      );
    } else {
      if (this.label.length > this.props.value.length) {
        this.errorThrower(
          "error: Number of lables should be same as number of values," +
          " add " + (this.label.length - this.props.value.length) +
          " values in '" + this.groupId + "' button group."
        );
      } else {
        this.errorThrower(
          "error: Number of lables should be same as number of values, " +
          " add " + (this.props.value.length - this.label.length) +
          " labels in '" + this.groupId +
          "' button group or reduce number of values."
        );
      }
    }
  }
};

export default ButtonGroup;
