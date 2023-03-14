import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('http://localhost:2000/api/all-vendors')
    const vendors = await response.json()
    return NextResponse.json(vendors)
  } catch (error: any) {
    return NextResponse.json({success: false, message: error.message})
  }
}