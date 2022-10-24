import "./styles.css";
import LottoMain from "./LottoMain";
export default function App() {
  return (
    <div className="App">
      <LottoMain key="Lotto-1" title="Lotto" numBalls="6" maxNum="40" />
      <LottoMain key="Lotto-2" title="Mini Daily" numBalls="4" maxNum="25" />
    </div>
  );
}
