import { redirect } from "next/navigation"

export default function Safari(){
    redirect('/')
    return(
        <div>
        <h1>Safari pages</h1>
        </div>
    )
}