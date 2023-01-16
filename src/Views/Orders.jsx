import OrdersCoffeeButton from "../Components/Orders/OrdersCoffeeButton"
import OrdersForm from "../Components/Orders/OrdersForm"
import withAuth from "../hoc/withAuth"

const Orders = () => {
    return (
        <>
        <h1>Orders</h1>
        <section id="coffee-options">
            <OrdersCoffeeButton name="Americano" image="images/americano.png" key="americano"/>
            <OrdersCoffeeButton name="Cappuccino" image="images/cappuccino.png" key="cappuccino"/>
            <OrdersCoffeeButton name="Latte" image="images/latte-art.png" key="latte"/>
            <OrdersCoffeeButton name="Espresso" image="images/espresso.png" key="espresso"/>
        </section>
        <section id="order-notes">
            <OrdersForm/>
        </section>
        </>
    )
}
export default withAuth(Orders)