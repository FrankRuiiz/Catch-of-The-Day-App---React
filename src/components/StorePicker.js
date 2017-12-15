import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log('change url');
    // first grab the text from the box
    console.log(this.storeInput.value);
    // second were going to transition from / to /store/:storeId
  }

  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store></button>
      </form>
    );
  }
}

export default StorePicker;
