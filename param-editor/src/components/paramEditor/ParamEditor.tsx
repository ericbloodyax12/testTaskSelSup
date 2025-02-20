import React, {useState} from 'react';
import {Model, Param, ParamValue} from "../../types";

interface TParamEditorProps  {
    params: Param[];
    model: Model
}

export const ParamEditor: React.FC<TParamEditorProps> = ({params, model}) => {

    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues)

    return (
        <div>

        </div>
    );
}

