const OrdersCoffeeButton = ({ name, image }) => {
    return (
        <button>
            <aside>
                <img src={image} alt={name} width="55" />
            </aside>
            <section>
                <b>{name}</b>
            </section>
        </button>
    )

}

export default OrdersCoffeeButton