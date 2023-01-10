import { writable } from 'svelte/store'
import { getPath }     from '$utils/page'

export { default as AccountButton } from './AccountButton.svelte'
export { default as Account } from './Account.svelte'
export { default as Presence } from './Presence.svelte'

const createUser = () => {
    const { subscribe, set, update } = writable(null)
    return {
        subscribe, set, update,
        get: () => {
            let $store
            user.subscribe(store => $store = store)
            return $store
        },
        create: (data, updateJwt = true) => {
            user.set(data)
            if (updateJwt) {
                document.cookie = `jwt=${data.jwt.token};expires=${new Date(data.jwt.expires).toUTCString()};path=/;`
            }
        },
        connect: async (form) => {
            const response = await fetch(`/resources.api/account/auth`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form)
            })
            const json = await response.json()
            if (response.status !== 200) {
                if (json.message === 'terms') return `Vous devez accepter les CGU`
                return 'Identifiant ou mot de passe incorrect'
            }
            user.create( json )
            window.location.replace( getPath('/') )
            return json
        },
        register: async (form) => {
            const response = await fetch(`/resources.api/account`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form)
            })
            const json = await response.json()
            return json
        },
        logout: () => {
            document.cookie = `jwt=null;path=/`
            user.set(null)
            document.location.reload()
            return
        },
        getAccount: async () => {
            const response = await fetch(`/resources.api/account`)
            if (response.status === 200) {
                user.create( await response.json() )
                return true
            }
            return false
        },
    }
}
export const user = createUser()

export const account = {
    edit: async (form) => {
        const response = await fetch(`/resources.api/account`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        if (response.status !== 200) {
            const errors = await response.json()
            return errors
        }
        user.create( await response.json(), false )
        return null
    },
    password: async (form) => {
        const response = await fetch(`/resources.api/account/password`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        if (response.status !== 200) {
            return await response.json()
        }
        return null
    },
    destroy: async () => {
        const response = await fetch(`/resources.api/account`, {
            headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
            method: 'DELETE',
        })
        if (response.status === 200) {
            user.logout()
            document.location.reload()
            return
        }
        return
    }
}

export const manager = writable(false)
export const page = writable('show')

export const presence = writable([])