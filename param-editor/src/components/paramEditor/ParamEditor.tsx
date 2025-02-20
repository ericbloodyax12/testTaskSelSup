import React, {useState} from 'react';
import {Model, Param, ParamValue} from "../../types";
import {ParamInput} from "./ParamInput.tsx";

interface TParamEditorProps  {
    params: Param[];
    model: Model
}

export const ParamEditor: React.FC<TParamEditorProps> = ({params, model}) => {

    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues)

    return (
        <div>
            <ParamInput />
        </div>
    );
}

