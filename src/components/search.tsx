import { useEffect, useState } from 'react'
import styled from 'styled-components';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: () => {};
    onEnter ?: () => {};
}

const Input = styled.input`
    height: 4vh;
    width: 20vw;
    border: none;

    &:hover {
        border: 2px solid black;
        border-radius: 12px;
        outline: none;
    }

    &:focus {
        border: 2px solid black;
        border-radius: 12px;
        outline: none;
    }
`

const PlaceHolder = styled.label`
    color: #213547;
    font-size: 15px;
    position: absolute;
    top: 7px;
    left: 90px;
    display: ${props => props.value ? "none" : "true"}
`

const Wrapper = styled.div`
    background: transparent;
    position: relative;
`



function SearchBar({placeholder, onChange, onEnter}: InputProps) {
    const [inputValue, setInputValue] = useState<string>("")
    
    useEffect(() => {
        onChange(inputValue)
    },[inputValue])

    return (
        <>
            <Wrapper>
                <Input 
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={e => e.key === 'Enter' ? onEnter(inputValue) :''}
                />
                <PlaceHolder value={!! inputValue}>
                    {placeholder}
                </PlaceHolder>
            </Wrapper>
        </>
    )
}

export default SearchBar