import {NextResponse} from "next/server"



export function GET(request, context) {
    const userId = context.params.userid

    return NextResponse.json({
        userId

    })
}