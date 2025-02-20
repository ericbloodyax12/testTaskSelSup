import './App.css'
import {Model, Param} from "./types";
import {ParamEditor} from "./components/paramEditor/ParamEditor.tsx";

function App() {
    const params: Param[] = [
        { id: 1, name: "Назначение", type: "string" },
        { id: 2, name: "Длина", type: "string" },
    ];

    const model: Model = {
        paramValues: [
            { paramId: 1, value: "повседневное" },
            { paramId: 2, value: "макси" },
        ],
        colors: [],
    };
  return (
    <>
      <h1>testTaskSelSup of Barsegyan</h1>
        <ParamEditor params={params} model={model} />
    </>
  )
}

export default App
