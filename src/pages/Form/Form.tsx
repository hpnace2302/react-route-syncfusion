/* eslint-disable @typescript-eslint/no-unused-vars */
import { select } from '@syncfusion/ej2-base';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { MaskedTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import "./Form.css"

function Validation() {
  // var dialogInstance = React.useRef(<DialogComponent />);
  var formObject: FormValidator;

  var listObj = React.useRef(<ComboBoxComponent />);

  const sportsData = [
    { "Id": "Game1", "Game": "American Football" },
    { "Id": "Game2", "Game": "Badminton" },
    { "Id": "Game3", "Game": "Basketball" },
    { "Id": "Game4", "Game": "Cricket" },
    { "Id": "Game5", "Game": "Football" },
    { "Id": "Game6", "Game": "Golf" },
    { "Id": "Game7", "Game": "Hockey" },
    { "Id": "Game8", "Game": "Rugby" },
    { "Id": "Game9", "Game": "Snooker" },
    { "Id": "Game10", "Game": "Tennis" }
  ]
  const fields = { text: 'Game', value: 'Id' };
  // set the value to select an item based on mapped value at initial rendering
  const value = 'Game3';

  const animationSettings: object = { effect: 'Zoom' };
  const floatFocus = (args: any): void => {
    // args.target.parentElement.classList.add('e-input-focus');
  };
  const floatBlur = (args: any): void => {
    // args.target.parentElement.classList.remove('e-input-focus');
  };
  // Dialog will be closed, while clicking on overlay
  const onOverlayClick = (): void => {
    // dialogInstance.hide();
  };

  React.useEffect(() => {
    const options: FormValidatorModel = {
      // add the rules for validation
      rules: {
        'email': {
          required: [true, '* Enter your email']
        },
        'mobile': {
          required: [true, '* Enter your mobile number']
        },
        'name': {
          required: [true, '* Enter your name']
        },
        'password': {
          required: [true, '* Enter your password']
        },
        'dob': {
          required: [true, '* Enter your date of birth'], date: 'dd-mm-yyyy'
        },
        'games': {
          required: [true, '* Enter your games']
        }
      }
    };
    // initialize the form validator
    formObject = new FormValidator('#form1', options);
    formObject.addRules('password', { minLength: [6, 'Minimum number of characters 6'], maxLength: [16, 'Character count should not greater than 16'] });
  }, []);

  const onSubmitClick = (): void => {
    if (formObject.validate()) {
      console.log(formObject);
      formObject.element.reset();

      // dialogInstance.show();
    }
  };

  return (
    <div className='control-pane'>
      <div className='control-section col-lg-12'>
        <h4 className="form-title">Validation Support</h4>
        {/* <div className='validation_wrapper'>
          <div className="control_wrapper" id="control_wrapper"> */}
        <form id="form1" method="post" style={{ width: "90%", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          <div className="input-item">
            <TextBoxComponent style={{ width: "90%", border: "1px solid #c0c0c0", borderRadius: "10px", padding: "5px 10px 0", boxSizing: "border-box" }} type="text" id="name" placeholder="First Name" floatLabelType="Auto" onFocus={floatFocus} onBlur={floatBlur} data-msg-containerid="nameError" />
            <div id="nameError" />
          </div>
          <div className="input-item">
            <TextBoxComponent style={{ width: "90%", border: "1px solid #c0c0c0", borderRadius: "10px", padding: "5px 10px 0", boxSizing: "border-box" }} type="email" id="email" placeholder="Email" floatLabelType="Auto" onFocus={floatFocus} onBlur={floatBlur} data-msg-containerid="mailError" />
            <div id="mailError" />
          </div>
          <div className="input-item">
            <MaskedTextBoxComponent style={{ width: "90%", border: "1px solid #c0c0c0", borderRadius: "10px", padding: "5px 10px 0", boxSizing: "border-box" }} floatLabelType="Auto" id="mobile"
              placeholder="Mobile no" data-msg-containerid="noError" mask='000-000-0000'></MaskedTextBoxComponent>
            <div id="noError" />
          </div>
          <div className="input-item">
            <MaskedTextBoxComponent style={{ width: "90%", border: "1px solid #c0c0c0", borderRadius: "10px", padding: "5px 10px 0", boxSizing: "border-box" }} floatLabelType="Auto" id="dob"
              placeholder="Data of birth" data-msg-containerid="dobError" mask='00/00/0000'></MaskedTextBoxComponent>
            <div id="dobError" />
          </div>
          <div className="input-item">
            <TextBoxComponent style={{ width: "90%", border: "1px solid #c0c0c0", borderRadius: "10px", padding: "5px 10px 0", boxSizing: "border-box" }} type="password" id="password" placeholder="Password" floatLabelType="Auto" onFocus={floatFocus} onBlur={floatBlur} data-msg-containerid="passwordError" />
            <div id="passwordError" />
          </div>
          <div className="input-item">
            <ComboBoxComponent id="games"
              style={{
                width: "100%",
                height: "24px",
                borderRadius: "10px", padding: "5px 10px 1px"
              }}
              dataSource={sportsData}
              //  ref={(combobox) => { listObj = combobox; }}
              fields={fields} placeholder="Select a game" popupHeight="220px" data-msg-containerid="selectError" />
            <div id="selectError" />
          </div>
        </form>
        <br />
        <div className="submitBtn">
          <button className="submit-btn e-btn" onClick={onSubmitClick} id="submit-btn">Submit</button>
        </div>
        {/* <div id="confirmationDialog" />  */}
      </div>
      {/* </div>
      </div> */}
    </div>);
}
export default Validation