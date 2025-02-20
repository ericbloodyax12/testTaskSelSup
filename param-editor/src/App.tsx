import './App.css'
import React from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
    colors: string[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues,
        };
    }


    handleChange = (paramId: number, value: string) => {
        this.setState((prevState) => ({
            paramValues: prevState.paramValues.map((p) =>
                p.paramId === paramId ? { ...p, value } : p
            ),
        }));
    };
    getModel = (): Model => {
        return {
            paramValues: this.state.paramValues,
            colors: [],
        };
    };

    render() {
        return (
            <div>
                {this.props.params.map((param) => {
                    const paramValue =
                        this.state.paramValues.find((p) => p.paramId === param.id)?.value ||
                        '';

                    return (
                        <div key={param.id} style={{ display: 'flex', marginBottom: '8px' }}>
                            <label style={{ width: '150px' }}>{param.name}</label>
                            <input
                                type="text"
                                value={paramValue}
                                onChange={(e) =>
                                    this.handleChange(param.id, e.target.value)
                                }
                            />
                        </div>
                    );
                })}
                <button onClick={() => console.log(this.getModel())}>
                    Получить Model
                </button>
            </div>
        );
    }
}
const params: Param[] = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
];

const model: Model = {
    paramValues: [
        { paramId: 1, value: 'повседневное' },
        { paramId: 2, value: 'макси' },
    ],
    colors: [],
};


const App = () => <ParamEditor params={params} model={model} />

export default App
