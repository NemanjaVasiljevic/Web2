import './App.css';

function ShowLogo(props){
  return <img src={props.path} alt='Loading...' width="110" height="100"/>
}

function App() {
  return (
    <div>
      <ShowLogo path = 'angular.png'/>
      <ShowLogo path = 'react.png'/>
      <ShowLogo path = 'vue.png'/>
    </div>
  );
}

export default App;
