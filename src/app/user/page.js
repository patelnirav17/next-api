import Link from "next/link";
import getUsers from "../../../services/page"
export default async function Page(){
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users)
    return(
        <div>
        <h1>User List</h1>
        {
            users.map((item)=>(
                <h2 key={item.id}>
                <Link href={`/user/${item.id}`}>{item.title}</Link>
                </h2>
            ))
        }
        </div>
    )
}