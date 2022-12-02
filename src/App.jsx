import "./App.css";
import TableComponent from "./components/TableComponent";
import tableData from "./data/tableTestData.json";
import tableConfig1 from "./data/tableConfig1.json";
import tableConfig2 from "./data/tableConfig2.json";
import tableConfig3 from "./data/tableConfig3.json";
import tableConfig from "./data/tableConfig.json";

function App() {
  // console.log(tableData);
  return (
    <div className="App">
      <h1>Part 1</h1>
      <TableComponent
        data={tableData}
        tableConfig={tableConfig}
      ></TableComponent>

      <h1>Part 2</h1>
      <TableComponent
        data={tableData}
        tableConfig={tableConfig1}
      ></TableComponent>

      <TableComponent
        data={tableData}
        tableConfig={tableConfig2}
      ></TableComponent>

      <TableComponent
        data={tableData}
        tableConfig={tableConfig3}
      ></TableComponent>
    </div>
  );
}

export default App;
