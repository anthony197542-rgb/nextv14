import { NextResponse } from "next/server";
export async function GET() {

  return NextResponse.json({
    fruits: ["apples", "grapes", "oranges"]
  })
}

export async function POST(request) {
  const fruits = await request.json()

  return NextResponse.json(fruits)

}