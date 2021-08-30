import React, { useState } from "react";

const Searchbar = () => {
    const [inputState, setInputState] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.target.value)
        console.log(inputState)
    }

    return (
        <div className="search-box">
            <input type="text"
                onChange={handleChange}
                value={inputState}
            />
        </div>
    )
}

export default Searchbar