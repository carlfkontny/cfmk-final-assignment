import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = ({ logout }) => {
    
    const { setUser } = useUser()
    const handleLogOutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        } 
    }

    return (
        <ul>
            <li><Link to="/orders">Orders</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={ handleLogOutClick }>Log out</button></li>
        </ul>
    )
}

export default ProfileActions