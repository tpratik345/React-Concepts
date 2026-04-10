import { useEffect } from "react"

export default function withLogger(WrappedComponent) {
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log('component loaded!')
            return () => {
                console.log('component unmounted!')
            }
        }, [])

        return <WrappedComponent {...props}/>
    }

}