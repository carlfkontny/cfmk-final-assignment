import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../Components/Profile/ProfileActions"
import ProfileHeader from "../Components/Profile/ProfileHeader"
import ProfileOrderHistory from "../Components/Profile/ProfileOrderHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = () => {
    const { user, setUser } = useUser()

    useEffect(() => { //useEffect can't be asyncronous 
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [ setUser, user.id ])
    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileOrderHistory orders={user.orders} />
        </>
    )
}
export default withAuth(Profile)