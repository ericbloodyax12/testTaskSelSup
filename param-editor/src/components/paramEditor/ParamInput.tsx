import React from 'react';

type TParamInputProps = {}

export const ParamInput: React.FC<TParamInputProps> = ({}) => {
    return (
        <div>
            <label></label>
            <input
                type="text"
                onChange={(e) => {
                    console.log(e.target.value);}}
            />
        </div>
    );
}

