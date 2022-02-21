import * as React from 'react';
import MuiPhoneNumber from "material-ui-phone-number";


const styles = {};
export default class RowRadioButtonsGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultValues: {
            username: "",
            name: "",
            phone: ""
          }
        };
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
      }
      handlePhoneChange(value) {
        if (value) {
          this.setState({ phone: value });
        }
      }
      render()
      {
  return (
        <MuiPhoneNumber
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
        />
        );
    }
}






// import React from 'react'
// import MuiPhoneNumber from 'material-ui-phone-number';

// function handleOnChange(value) {
//     this.setState({
//        phone: value
//     });
//  }

// const MobileNumber_MUI = () => {
//     return (
//         <div>
//         <MuiPhoneNumber defaultCountry={'in'} 
        
//         onChange={this.handleOnChange}/>
//         </div>
//     )
// }

// export default MobileNumber_MUI

