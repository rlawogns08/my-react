import React from 'react';
import ReactDOM from 'react-dom';


class App extends ReactComponent {
    render() {
        return (
            <h3>안녕하세요 리액트입니다</h3>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
