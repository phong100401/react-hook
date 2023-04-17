import { useHistory } from "react-router-dom"

const NotFound = () => {
    let history = useHistory();
    const handleClickBtn = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h4>This page not found</h4>
            <h5>Broken man</h5>
            <button className="btn btn-primary" onClick={handleClickBtn}>Back homepage</button>
        </div>
    )
}

export default NotFound