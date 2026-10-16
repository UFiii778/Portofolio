// app/api/views/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

// GET: Mengambil semua data komentar dari database
export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM guestbook ORDER BY created_at DESC"
    );
    client.release();

    return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST: Menyimpan komentar baru dari pengunjung
export async function POST(req) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { success: false, message: "Name and message are required!" },
        { status: 400 }
      );
    }

    const username = `@${name.toLowerCase().trim().replace(/\s+/g, "_")}`;
    const avatar = `https://avatar.vercel.sh/${encodeURIComponent(username)}`;

    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO guestbook (name, username, avatar, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, username, avatar, message]
    );
    client.release();

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}