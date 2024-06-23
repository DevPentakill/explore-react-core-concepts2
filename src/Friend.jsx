export default function Friend({ frnd }) {
    const { id, name, email } = frnd;
    console.log(frnd);
    return (
        <div className="tiffin2">
            <h5>Friend No.{id}</h5>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>

    )
}