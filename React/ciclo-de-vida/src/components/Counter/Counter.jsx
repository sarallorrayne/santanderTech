import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };

        console.log("Construindo a classe counter...");
    }

    UNSAFE_componentWillMount() {
        console.log("O nosso componente está prestes a ser montado...");
    }

    componentDidMount() {
        console.log("O nosso componente foi montado!");

        document.addEventListener('scroll', this.consoleScroll);
    }

    // Método chamdo sempre que uma prep ou estado for atualizado
    // Usado para controlar quando você quer que o componente seja atualizado e quando não
    shouldComponentUpdate() {
        console.log("O nosso componente deve ser atualizado?");
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log("O nosso componente está prestes a ser atualizado...");
    }

    componentDidUpdate() {
        console.log("O nosso componente foi atualizado!");
    }

    componentWillUnmount() {
        console.log("O nosso componente será desmontado!");

        document.removeEventListener('scroll', this.consoleScroll // Deve passar a mesma função que foi passada no addEventListener
        );
    }

    consoleScroll() {
        console.log("Rolando a página...")
    };

    render() {
        console.log("Renderizando o componente...");
        return (
            <div>
                <h1>{this.state.counter}</h1>

                <button
                onClick={() => this.setState({
                    counter: this.state.counter + 1
                    })
                }>
                    Aumentar
                </button>
                <button 
                onClick={() => this.setState({
                    counter: this.state.counter - 1
                })}>
                    Diminuir
                    </button>
            </div>
        )
    }
}