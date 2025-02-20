import './App.css'
import React from 'react';

interface Param<T = string> {
    id: number;
    name: string;
    type: T;
}

interface ParamValue<T = string> {
    paramId: number;
    value: T;
}

interface Model<T = string> {
    paramValues: ParamValue<T>[];
    colors: string[];
}

interface Props<T = string> {
    params: Param<T>[];
    model: Model<T>;
}

interface State<T = string> {
    paramValues: ParamValue<T>[];
}

class ParamEditor<T = string> extends React.Component<Props<T>, State<T>> {
    constructor(props: Props<T>) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues,
        };
    }


    handleChange = (paramId: number, value: T) => {
        this.setState((prevState) => ({
            paramValues: prevState.paramValues.map((p) =>
                p.paramId === paramId ? { ...p, value } : p
            ),
        }));
    };
    getModel = (): Model<T> => {
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
                        <div key={param.id} className={"div-InputEditContainer"}>
                            <label>{param.name}</label>
                            <input
                                type="text"
                                value={paramValue as string}
                                onChange={(e) =>
                                    this.handleChange(param.id, e.target.value as T)
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
