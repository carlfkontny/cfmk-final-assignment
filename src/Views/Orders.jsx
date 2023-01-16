import { useState } from "react"
import OrdersCoffeeButton from "../Components/Orders/OrdersCoffeeButton"
import OrdersForm from "../Components/Orders/OrdersForm"
import withAuth from "../hoc/withAuth"

const COFFEES = [{
    id: 1,
    name: "Americano",
    image: "images/americano.png"
},
{
    id: 2,
    name: "Cappuccino",
    image: "images/cappuccino.png"
},
{
    id: 3,
    name: "Latte",
    image: "images/latte-art.png"
},
{
    id: 4,
    name: "Espresso",
    image: "images/espresso.png"
}
]

const Orders = () => {
    
    const [ coffee, setCoffee ] = useState(null)

    const handleCoffeeClicked = (coffeeId) => {
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))
    }


    const availableCoffees = COFFEES.map(coffee => {
        return <OrdersCoffeeButton
            key={coffee.id}
            coffee={ coffee } //pass the entire coffee object 
            onSelect=  { handleCoffeeClicked }/>
    })

    return (
        <>
            <h1>Orders</h1>
            <section id="coffee-options">
                {availableCoffees}
            </section>
            <section id="order-notes">
                <OrdersForm />
            </section>
            { coffee && <p>Summary: { coffee.name } </p>}
        </>
    )
}
export default withAuth(Orders)