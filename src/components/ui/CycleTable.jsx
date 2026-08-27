import styles from "./CycleTable.module.css";

// Corner-cycle situations after F2L-1 + edges are solved, and how many
// commutators each pattern costs to fix.
export function CycleTable({ rows = [], footnote }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ситуація на кутах</th>
            <th>Комутаторів</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.pattern}>
              <td className={styles.pattern}>{row.pattern}</td>
              <td>
                <span className={styles.cost}>{row.cost}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </div>
  );
}
