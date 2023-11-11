// export async function GET(request){
//     return new Response("Hello Next.Js Developer")
// }
import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(){
    const data = user;
    // return NextResponse.json("Hello Server Part Data")
    return NextResponse.json(data,{status:200})
}


export async function POST(request,content){
    let payload = await request.json();
    console.log(payload)
    return NextResponse.json({name:"Nirav",age:25,Email:"gotinirav17@gmail.com"},{status:200})
}