import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

        console.log(inputs);
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }
    return (
        <div>
            
            <input placeholder="name" name="name" onChange={onChangeInput} value={name} ref={nameInput}/>
            <input placeholder="nickname" name="nickname" onChange={onChangeInput} value={nickname}/>

            <button onClick={onReset}>초기화</button>
            
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;