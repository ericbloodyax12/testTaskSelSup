import React from 'react';
import {Param} from "../../types";

interface TParamInputProps  {
    param: Param;
    value: string;
    onChange: (paramId: number,value: string) => void;
}

export const ParamInput: React.FC<TParamInputProps> = ({param, value, onChange}) => {
    return (
        <div>
            <label>{param.name}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(param.id,e.target.value)}
            />
        </div>
    );
}

