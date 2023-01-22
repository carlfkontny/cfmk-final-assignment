import { useState } from "react"
import { orderAdd } from "../api/order"
import OrdersCoffeeButton from "../Components/Orders/OrdersCoffeeButton"
import OrdersForm from "../Components/Orders/OrdersForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

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
    const { user, setUser } = useUser()

    const handleCoffeeClicked = (coffeeId) => {
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))
    }

    const handleOrderClicked = async (notes) => {
        //check if we have coffee
        if (!coffee) {
            alert('Please select a coffee first!')
            return
        }
              
        //combine order with notes
        const order = (coffee.name + ' ' + notes).trim()//trims away the empty space before and after so removes space at the end if notes is empty. 
        
        //send http request
        const [ error, result ] = await orderAdd(user, order)
        if (error !== null) {
            //that's bad
            return 
        }
        // Keep UI state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //Update context state
        setUser(updatedUser)
        console.log('Error', error)
        console.log('updatedUser', updatedUser)
        // be happy
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
                <OrdersForm onOrder={ handleOrderClicked }/>
            </section>
            { coffee && <p>Summary: { coffee.name } </p>}
        </>
    )
}
export default withAuth(Orders)