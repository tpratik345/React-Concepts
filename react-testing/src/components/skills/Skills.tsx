import React, { useEffect, useState } from 'react'

type SkillsProps = { skills: string[] }

function Skills({ skills }: SkillsProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1000)
    }, [])

    return (
        <>
            <ul>
                {skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })
                }
            </ul>
            {
                isLoggedIn
                    ? <button>Start Learning</button>
                    : <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }
        </>
    )
}

export default Skills