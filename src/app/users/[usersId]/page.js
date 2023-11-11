async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
     data = await data.json();
     console.log("data",data)
    return data;
}

export default async function Page({ params }) {
    // console.log("params", params.usersId)
    const user = await getUsers(params.usersId)
    // console.log("user", user)
    return (
        <div>
            <h1>User Details</h1>
            <h4>Name:{user.name}</h4>
            <h4>Age:{user.age}</h4>
            <h4>Email:{user.email}</h4>
            <h4>Id:{user.id}</h4>
        </div>
    )
}