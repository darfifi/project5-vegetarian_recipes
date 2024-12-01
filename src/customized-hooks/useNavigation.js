
import { useNavigate } from "react-router-dom";

export function useNavigation() {

    const navigate = useNavigate();
    
    const backToSearch = () => {
        navigate('/');
    };

    const backToResultsList = () => {
        navigate('/searchresult/recipes')
    };

    return { backToSearch, backToResultsList };
}