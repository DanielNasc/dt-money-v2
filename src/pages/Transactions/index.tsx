import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>23/12/2021</td>
            </tr>
            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 120,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>25/12/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>

      </TransactionsContainer>
    </div>
  )
}

