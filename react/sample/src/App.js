import React , {useState} from 'react';
import FormComp from './components/form';
import Parent from './components/parent';
import logo from './logo.svg';
import './App.css';
import './custom.scss';

function App() {
  let [name ,setName] = useState("yadhu");
  let callBack = vlu => setName(vlu);
  return (
    <div className="parent">
      <Parent/>
      {name}
      <FormComp clbkFcn={callBack} name={name}></FormComp>
    </div>
  );
}

export default App;