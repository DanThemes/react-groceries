import React, { useRef } from 'react';

const Header = ( {handleSubmit} ) => {
    const inputRef = useRef(null);

    return (
        <header>
            <form onSubmit={(e) => handleSubmit(e, inputRef)}>
                <input ref={inputRef} type="text" placeholder="Add new..." />
                <button type="submit"><span>Add</span></button>
            </form>
        </header>
    )
}

export default Header;