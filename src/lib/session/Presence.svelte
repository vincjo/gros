<script>
    import { user, presence } from '$modules/session'
    import io from 'socket.io-client'

    const socket = io('BASE_URL', { path: '/resources.api/whosthere/' })
    socket.on('connect', () => {
        socket.emit('identify', { 
            id: $user.id,
            firstname: $user.firstname,
            name: $user.name,
            group: $user.group?.name,
            organization: $user.organization?.name,
            application: 'RESOURCES'
        })
    })

    socket.on('users.new', ({user}) => {
        $presence = [...new Set([...$presence, user])]
    })

    socket.on('users.leave', ({user}) => {
        $presence = $presence.filter( item => item !== user)
    })

    socket.on('users', ({users}) => {
        $presence = users
    })
</script>