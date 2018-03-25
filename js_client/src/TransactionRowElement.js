import * as React from 'react';


// tslint:disable: no-any

class TransactionRowElement extends React.Component {
  props: {
    key: any;
    transactionObject: any;
  };
  
  // id, date, text, amount, balance, row_id, text_id, digest, created_at, updated_at, url
  render() {
    return (
      <tr className="TransactionRowElement">
        <td>
          {this.props.transactionObject.text}
        </td>
        <td>
          {this.props.transactionObject.amount}
        </td>
      </tr>
    );
  }
}

export default TransactionRowElement;

