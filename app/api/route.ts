import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Define paths
const dataDirectory = path.join(process.cwd(), 'lib');
const dataFilePath = path.join(dataDirectory, 'data.json');

/**
 * Helper: Ensure the "lib" directory exists before writing
 */
async function ensureDirectory() {
  try {
    await fs.access(dataDirectory);
  } catch (error) {
    // Directory doesn't exist, create it
    await fs.mkdir(dataDirectory, { recursive: true });
  }
}

/**
 * Helper: Read data safely
 */
async function getData() {
  try {
    await ensureDirectory();
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    console.log("exists");
    return JSON.parse(fileContents);
  } catch (error) {
    // If file doesn't exist or is unreadable, start fresh
    return [];
  }
}

// GET: Retrieve all projects
export async function GET(request: Request) {
  const data = await getData();
  return NextResponse.json(data, { status: 200 });
}

// POST: Add a new project
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Handle the Array format if sent as [{...}]
    const payload = Array.isArray(body) ? body[0] : body;
    const { id, title, description, technologies, img, source, link } = payload;

    // Validation
    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and Description are required" },
        { status: 400 }
      );
    }

    const newProject = {
      id: id || crypto.randomUUID(),
      title,
      description,
      technologies: technologies || [],
      img: img || "/default-placeholder.png",
      source: source || "",
      link: link || ""
    };

    // 1. Get existing data
    const currentData = await getData();
    
    // 2. Append new data
    const updatedData = Array.isArray(currentData) 
      ? [...currentData, newProject] 
      : [newProject];

    // 3. CRITICAL: Ensure folder exists before writing
    await ensureDirectory();

    // 4. Write to file
    await fs.writeFile(dataFilePath, JSON.stringify(updatedData, null, 2));
    
    console.log("Saved to:", dataFilePath); // Server-side log for debugging
    
    return NextResponse.json(newProject, { status: 201 });

  } catch (error: any) {
    console.error("Detailed API Error:", error); // Check your terminal for this
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message }, 
      { status: 500 }
    );
  }
}

// PATCH: Update an existing project
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required for updates" },
        { status: 400 }
      );
    }

    const currentData = await getData();
    const index = currentData.findIndex((p: any) => p.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    currentData[index] = { ...currentData[index], ...updates };

    await ensureDirectory();
    await fs.writeFile(dataFilePath, JSON.stringify(currentData, null, 2));
    
    return NextResponse.json(
      { message: "Project updated successfully", project: currentData[index] },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Error processing update" }, 
      { status: 500 }
    );
  }
}

// DELETE: Remove a project
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Project ID is required" },
      { status: 400 }
    );
  }

  try {
    const currentData = await getData();
    const filteredData = currentData.filter((p: any) => p.id !== id);

    await ensureDirectory();
    await fs.writeFile(dataFilePath, JSON.stringify(filteredData, null, 2));

    return NextResponse.json(
      { message: `Project ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting project" }, 
      { status: 500 }
    );
  }
}