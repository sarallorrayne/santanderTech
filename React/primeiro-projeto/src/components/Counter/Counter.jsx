import React from "react";


export class Counter extends React.Component {
    constructor () {
        super();
        // this.counter = 0;
        this.state = {
            counter: 0,
            name: '',
            password: ''
        };
    }

    render () {
        return (
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <h1>{this.state.counter}</h1>

                <div>
                    <button
                    onClick={() => {
                        // this.state.counter--; - NÃO UTILIZAR
                        this.setState({
                            counter: this.state.counter - 1
                        })
                    }}
                    >
                        Diminuir
                    </button>
                    <button
                    onClick={() => {
                        // this.counter++;
                        this.setState({
                            counter: this.state.counter + 1
                        })
                    }}
                    >
                        Aumentar
                    </button>
                </div>

                <form style={{ marginTop: "40px" }}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={this.state.name}
                        onChange={(event) => {
                            this.setState({
                                name: event.target.value // pega o que o usuário digitou e coloca no state
                            })
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({
                                password: event.target.value
                            })
                        }}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}