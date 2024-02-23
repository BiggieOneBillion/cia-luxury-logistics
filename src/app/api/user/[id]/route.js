import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id 
    console.log(id);
    return NextResponse.json({id: id});
  }