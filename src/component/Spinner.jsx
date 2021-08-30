import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <>
            <div className="text-center" style={{marginTop:"-300px"}}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </>
    )
}

export default Loading;