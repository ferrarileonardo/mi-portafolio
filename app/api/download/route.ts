import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CV2.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=CV2.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
  }
}