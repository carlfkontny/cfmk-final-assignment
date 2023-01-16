import { useForm } from "react-hook-form"

const OrdersForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {

    }
    
    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="order-notes">Order notes:</label>
                <input type="text" {...register('orderNotes')} placeholder="Any extra instructions?"/>
            </fieldset>

            <button type="submit">Order</button>

        </form>
    )
}

export default OrdersForm