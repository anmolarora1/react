import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }   
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
//        return React.createElement('h1', null, 'Hello World')
        let txt = this.state.txt, cat = this.props.cat
        return (
            <div>
                <input type="text" 
                onChange={this.update.bind(this)} />
                <h1>Hello World {txt}</h1>
                <h2>cat {cat}</h2>
                <b>Bold</b>
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
    txt: 'this is default txt'
}

ReactDom.render(
    <App cat={1} txt="this is a props text" />,
    document.getElementById('app')
);

//const App = () => <h1>Hello Eggheads</h1>

export default App