import React, {Component} from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }
    myRef = null;

    constructor(props) {
        super(props);
        console.log('i\'m on constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('i\'m on getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }
    handleClick = () => {
        this.setState({number: this.state.number+1})
    }
    render() {
        console.log('i\'m on render');
        const style = {color: this.props.color}
        return(
            <div>
                <h1 style={style} ref={ref=>this.myRef=ref}>{this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
    componentDidMount() { 
        console.log('i\'m on componentDidMount'); 
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // 3, 6, 9, ... 리렌더링 안 함
        console.log('i\'m on shouldComponentUpdate');
        return nextState.number % 3 !== 0;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('i\'m on getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('i\'m on componentDidUpdate');
        if(snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    componentWillUnmount() {
        console.log('i\'m on componentWillUnmount');
    }
}

export default LifeCycleSample;