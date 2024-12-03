import PropTypes from 'prop-types';
import { table, thead, th, td, tr } from './transactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={table}>
      <thead className={thead}>
        <tr className={tr}>
          <th className={th}>TYPE</th>
          <th className={th}>AMOUNT</th>
          <th className={th}>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={tr} key={id}>
            <td className={td}>{toUpperCase(type)}</td>
            <td className={td}>{amount}</td>
            <td className={td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function toUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
