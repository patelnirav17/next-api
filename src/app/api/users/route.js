import { user } from "@/util/db";
import { NextResponse } from "next/server";
export function GET() {
    const data = user
    return NextResponse.json(data)
}


// export function POST(){
//     return NextResponse.json("Hello POST request")
// }


export async function POST(request){
    let payload = await request.json();
    if(!payload.name || !payload.age || !payload.age){
        return NextResponse.json({result:"required filed is not found",success:false},{status:400})
    }
    console.log(payload)
    const data = user
    return NextResponse.json({result:data,success:true},{status:201})
}


