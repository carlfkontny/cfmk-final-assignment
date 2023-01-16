import { isRouteErrorResponse } from "react-router-dom"
import { createHeaders } from "."

const apiUrl = process.env.REACT_APP_API_URL

export const orderAdd = async (user, order) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, { //when we update existing data we use PATCH, when we add data POST and when read data GET
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                orders: [...user.orders, order]
            })
        })

        if (!response.ok) {
            throw new Error('Could not update the order')
        }

        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]

    }
}

export const orderClearHistory = (orderId) => {

}