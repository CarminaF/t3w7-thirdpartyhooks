import { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom"


export default function NumberGrabber() {
    
    const params = useParams();

    const navigate = useNavigate();

    function navigateToHome() {
        console.log("save some data or refresh a jwt etc")
        navigate("/");
    }
    
    useEffect (() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, []);

    return (
        <div>
            <h1>The number that this component grabbed is {params.banana}</h1>
            
            <button onClick={navigateToHome}>
                Go home
            </button>
        </div>
    )
}