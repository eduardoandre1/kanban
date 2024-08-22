import styles from "./page.module.css";
import TablesComponent from "./pages/components/table";
import table from './styles/table.module.css'
import "@/app/styles/table.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <TablesComponent />
      <section className={table.section}>
      <table>
        <thead>
          <td className={styles.td}> To do</td>
        </thead>
        <tbody>
        <tr>
          <td  >exemple 1</td>
          <td>exemple 1</td>
          <td>exemple 1</td>
        </tr>
        </tbody>
        
      </table>
      <table>
        <th>
          <td>Doing</td>
        </th>
        <tr>
          <td>exemple 1</td>
        </tr>
      </table>
      <table>
        <th>
          <td> Testing</td>
        </th>
        <tr>
          <td>exemple 1</td>
        </tr>
      </table>
      <table>
        <th>
          <td>Done</td>
        </th>
        <tr>
          <td>exemple 1</td>
        </tr>
      </table>
      </section>
    </main>
      
  );
}
