import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = (props) => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${function(props) {
    console.log('props', props);
    if (props.primary) {
      return 'white'
    } else {
      return 'blue'
    }
    
  }};
`;

const MyColorButton = styled.button`
  color: ${function(props) {
    console.log('props', props);
    return props.color;
  }};
`;

const MyRGBButton = styled.button`
  color: ${function(props) {
    console.log('props', props);
    let r = props.r;
    let g = props.g;
    let b = props.b;
    return 'rgb('+r+', '+g+', '+b+')';
  }};
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
      <MyColorButton color='green'>내가 정한 색</MyColorButton>
      <MyRGBButton r='160' g='200' b='60'>RGB 글자 색</MyRGBButton>
    </div>
  );
}

export default App;
