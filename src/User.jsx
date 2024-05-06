export default function User({ user }) {
    const { name, email } = user


    const userStyle = {
        border: '2px solid orange',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={userStyle}>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    )
}