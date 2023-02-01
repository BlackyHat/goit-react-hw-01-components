import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }: ITransactionHistoryArr) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionTableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionTableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

interface ITransactionHistoryArr {
  items: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}
