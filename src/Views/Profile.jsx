import ProfileActions from "../Components/Profile/ProfileActions"
import ProfileHeader from "../Components/Profile/ProfileHeader"
import ProfileOrderHistory from "../Components/Profile/ProfileOrderHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {
    const { user } = useUser()
     
    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={ user.username }/>
            <ProfileActions/>
            <ProfileOrderHistory orders={ user.orders }/>
        </>
    )
}
export default withAuth(Profile)