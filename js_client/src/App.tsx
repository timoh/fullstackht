import * as React from 'react';
import './App.css';
import Transactions from './Transactions';
import transactionsService from './services/transactions';

const logo = require('./logo.svg');

interface AppProps { /* declare your component's props here */ }
interface AppState { transactions: Array<TransactionRow>; }
interface TransactionRow { 
  id: string; 
  date: string;
  text: string; 
  amount: string; 
  balance: string; 
  row_id: number; 
  text_id: number; 
  digest: string; 
  created_at: string; 
  updated_at: string; 
  url: string; 
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      transactions: new Array<TransactionRow>()
    };
  }

  componentDidMount() {
    transactionsService
      .getAll()
      .then(response => {
        // tslint:disable-next-line: no-console
        // console.log(response.data);
        // tslint:disable-next-line: no-any
        const responses: Array<TransactionRow> = response.data.map((row: any) => {

          const trRow: TransactionRow = {
            id: row.id,
            date: row.date,
            text: row.text,
            amount: row.amount,
            balance: row.balance,
            row_id: row.row_id,
            text_id: row.text_id,
            digest: row.digest,
            created_at: row.created_at,
            updated_at: row.updated_at,
            url: row.url
          };

          return trRow;

        });
        // tslint:disable-next-line: no-console
        // console.log('First:', responses[0]);
        this.setState({ transactions: responses });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to budgRailsReact</h1>
        </header>
        <div className="App-intro">
          <Transactions transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;
