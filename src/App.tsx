import SearchBar from './components/search';
import DynamicTitle from './components/title';
import Button from './components/button';
import './App.css'
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function App() {

  const [title, setTitle] = useState<string>("BROSKI")
  const [storedTitle, setStoredTitle] = useState<string>("BROSKI")
  
  useEffect(() => {
      if (storedTitle === "") {
        setTitle("BROSKI")
      }
    }, [title, storedTitle]
  )
  
  const AAA = styled.div`
    background-color: black;
    color: black;
    width: 10px;
    height: 100px;

    transform: ${props => props.value ? 'rotate(-45deg)' : 'rotate(45deg)'};
    transition: transform .2s ease-out;
  `;

  const [x, setX] = useState(null)

  useEffect(() => {
    if (!!x) {
      setX(true)
    }
    setTimeout(() => {
          setX(prev => !prev)
          }, 550
        );
      }, [x]
    )

  return (
    <>
      <AAA value={x} onClick={() => setX(prev => !prev)}/>
      <DynamicTitle title={title}/>
      <SearchBar 
        placeholder="ça va bien"  
        onChange={setStoredTitle} 
        onEnter={() => setTitle(storedTitle)}
      />
    </>
  )
}

export default App
 