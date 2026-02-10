import React, { useEffect, useRef } from 'react'


function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <>
            <input type='text' ref={inputRef}/>
        </>
    )
}

export default DomRef