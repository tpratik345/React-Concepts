
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {

    let message;
    if(props.status=== 'loading') {
        message = 'Loading...'
    } else if(props.status === 'success') {
        message = 'Success!'
    } else {
        message = 'Error!!!'
    }

    return (
        <div>Status : {message}</div>
    )
}

export default Status