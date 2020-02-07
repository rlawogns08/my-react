import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    countUp() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    countDown() {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <div className="app">
                <h3>안녕하세요 리액트입니다 Redux 실험</h3>
                <input type="button" value="버튼" onClick={()=>{alert("클릭")}} />
                {/* <input type="button" value="숫자업" onClick={()=>{countUp()}} /> */}
                {/* <input type="button" value="숫자다운" onClick={()=>{countDown()}} /> */}
                <h3>카운트를 세보아요</h3>
                <input type="button" value="숫자업" onClick={() => {this.countUp()}} />
                <input type="button" value="숫자다운" onClick={()=> this.countDown() } />
                <hr/>
                {this.state.count}
            </div>
        );
    }
}



ReactDOM.render(
    <App />, 
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
