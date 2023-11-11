import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){
   console.log(content.params.id) //userid ee folder na name parthi (content.params.userid)ap va nu ** folder nu name id apu hoy to (content.params.id) thi id get thay
    const data = user.filter((item)=>item.id == content.params.id)
    console.log("data",data)
    return NextResponse.json(data.length == 0 ? {result:"No Result Fount"} :{result:data[0],success:false} ,{status:200})
}

export async function PUT(request){
    let payload = await request.json();
    const id = request.params.id;
    payload.id = id
    if(!payload.id || !payload.name || !payload.age || !payload.email){
            return NextResponse.json({result:"request data is not valid",success:true},{status:201})
    }
    console.log(payload)
    return NextResponse.json({result:payload, success:true},{status:200})
}