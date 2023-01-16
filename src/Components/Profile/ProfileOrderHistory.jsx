import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"


const ProfileOrderHistory = ({ orders }) => {

    const orderList = orders.map(
        (order, index) => <ProfileOrderHistoryItem key={ index + '-' + order} order={ order } />) //because we are looping we need a key/>)
    return (
        <section>
            <h4>Your order history</h4>
            <ul>
                { orderList }
            </ul>
        </section>
    )
}

export default ProfileOrderHistory