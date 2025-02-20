import React, {useState} from 'react';
import {Model, Param, ParamValue} from "../../types";
import {ParamInput} from "./ParamInput.tsx";

interface TParamEditorProps  {
    params: Param[];
    model: Model
}

export const ParamEditor: React.FC<TParamEditorProps> = ({params, model}) => {

    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues)

    class ParamEditor extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.state = {
                paramValues: props.model.paramValues,
            };
        }


    const handleChange = (paramId: number, value: string ) => {
        setParamValues(prevState =>
        prevState.map(p => (p.paramId === paramId ? {...p, value} : p)))
    }
    return (
        <div>
            {params.map((param, index) => {
                const paramValue = paramValues.find((p) => p.paramId === param.id)?.value || ""
                return <ParamInput key={param.id} param={param} value={paramValue} onChange={handleChange} />
            })}
        </div>
    );
}

