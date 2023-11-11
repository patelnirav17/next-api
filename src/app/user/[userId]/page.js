import { DefaultRouteMatcherManager } from "next/dist/server/future/route-matcher-managers/default-route-matcher-manager";
import getUsers from "../../../../services/page"
import { user } from "@/util/db";
export default  async function page(props){

    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = props.params.userId;
    const userData = users[currentId-1]
    console.log("user",users[currentId])
    return(
        <div>
        <h3>Hello New path data</h3>
        <h4>{userData.id}</h4>
        <h4>{userData.title}</h4>
        <h4>{userData.price}</h4>
        </div>
    )
}

// export default async function generateStaticParams(){
//     const getUserList = getUsers();
//     const users = await getUserList;
//     return users,map((user)=>({
//         userId: user.id.toString()
//     }))
// }