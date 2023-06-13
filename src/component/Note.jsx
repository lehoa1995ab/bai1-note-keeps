import React, { useState, useEffect } from 'react';

const Note = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputList, setInputList] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('notes');
        if (storedData) {
            setInputList(JSON.parse(storedData));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(inputList));
    }, [inputList]);


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {
        setInputList([...inputList, inputValue]);
        setInputValue('');
    };

    const handleDelete = (index) => {
        const updatedList = [...inputList];
        updatedList.splice(index, 1);
        setInputList(updatedList);
    };

    return (

        <div style={{
            backgroundColor: "#ECECEC",
            
        }}>
            <h1 style={{backgroundColor:"rgb(241, 183, 17)"}}>Note App</h1>
            <div style={{
                margin:"auto",
                marginBottom:"30px",
                backgroundColor: "#ECECEC",
                border: "1px solid black",
                width:"300px",
                borderRadius:"5px",
                textAlign:"center",
            }}>
                <h2>Title</h2>
                <input type="text" value={inputValue} onChange={handleChange} placeholder='Take a note...' /><br></br>
                <button onClick={handleAdd}
                    style={{
                        backgroundColor: 'hsl(45, 76%, 68%)',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '50%',
                        marginLeft: "130px",
                        textAlign:"center",
                        justifyContent:"center" ,      
                    }}
                >+</button>
            </div>
            <div style={{
                display: "flex",
                marginLeft: "20px"
            }}>
                {inputList.map((item, index) => (
                    <div style={{
                        
                        padding: '10px',
                        backgroundColor: '#ECECEC',
                        border: "1px solid black",
                        borderRadius:"5px",
                        justifyContent:"center",
                        alignItems:"center",
                        margin:"auto",
                        textAlign:"center"

                    }}>
                        <p key={index}>{item}</p>
                        <button onClick={() => handleDelete(index)}
                            style={{
                                backgroundColor: 'hsl(45, 76%, 68%)',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '3px 5px',
                            }}
                        >delete</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Note;
