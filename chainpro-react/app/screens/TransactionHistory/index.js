import React from 'react';
import {Component} from 'react';




class TransactionHistory extends Component {
	render() {

    const TransactionHistory = () => (
      <div className="transaction-history">
          <table>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                    <th>Timestamp</th>
                </tr>
                <tr>
                    <td>Corporate Level</td>
                    <td>Marketing Division</td>
                    <td>5 BTC</td>
                    <td>30 minutes ago</td>
                    <td><input type="button" value="View Report"/></td>
                </tr>
                <tr>
                    <td>Corporate Level</td>
                    <td>Sales Division</td>
                    <td>30 BTC</td>
                    <td>39 minutes ago</td>
                    <td><input type="button" value="View Report"/></td>
                </tr>
          </table>
      </div>
    );

		return (
      <TransactionHistory/>
		);
	}
}

export default TransactionHistory;
