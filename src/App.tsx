import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Jeff';
let age: number = 69;
let isSmart: boolean = true;
let students: string[] = ['Joe', 'Biden', 'Harris'];
let fees: number[] = [12, 25, 36, 45.78];

interface Person {
  name: string,
  job?: string,
  emplpoyed: string | boolean,
  age: number,
  location?: any
}


const person: Person = {
  name: 'Bill Clinton',
  emplpoyed: true,
  age: 85,
  location: { lat: 22, long: 25 }
}

const handleAddUser = (firstName: string, age: number, address: string) => {
  const total: number = 50;
  console.log(firstName, age, address);
  return address;
}
function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;


