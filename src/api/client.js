const getClients = async () => {
    const rest = await fetch(import.meta.env.VITE_API_URL)
    const result = await rest.json();

    return result
}

const addClient = async (data) => {
    try {
        const rest = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await rest.json()
    } catch (error) {
        console.log(error)
    }
}

const getClient = async (client) => {
    const rest = await fetch(`${import.meta.env.VITE_API_URL}/${client}`)
    const result = await rest.json();

    return result
}

const updateClient = async (id, client) => {
    try {
        const rest = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await rest.json()
    } catch (error) {
        console.log(error)
    }
}

const deleteClient = async (id) => {
    try {
        const rest = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
        })

        await rest.json()
    } catch (error) {
        console.log(error)
    }
}

export {getClients, addClient, getClient, updateClient, deleteClient}