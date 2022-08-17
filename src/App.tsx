import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
