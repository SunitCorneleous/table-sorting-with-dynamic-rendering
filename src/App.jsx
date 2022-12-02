import "./App.css";
import TableComponent from "./components/TableComponent";
import tableData from "./data/tableTestData.json";

function App() {
  // console.log(tableData);
  return (
    <div className="App">
      <TableComponent data={tableData}></TableComponent>
    </div>
  );
}

export default App;
