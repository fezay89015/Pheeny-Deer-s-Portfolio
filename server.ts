import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data", "projects.json");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/projects", async (req, res) => {
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      res.json(JSON.parse(data));
    } catch (error) {
      console.error("Error reading projects:", error);
      res.status(500).json({ error: "Failed to read projects" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const { password, ...newProject } = req.body;
      
      // Password check
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
      if (password !== adminPassword) {
        return res.status(401).json({ error: "Unauthorized: Incorrect password" });
      }

      // Basic validation
      if (!newProject.title || !newProject.category) {
        return res.status(400).json({ error: "Title and Category are required" });
      }

      const data = await fs.readFile(DATA_FILE, "utf-8");
      const projects = JSON.parse(data);
      
      // Generate a simple ID if not provided
      if (!newProject.id) {
        newProject.id = Date.now().toString();
      }
      
      projects.unshift(newProject); // Add to the beginning
      
      await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2));
      res.status(201).json(newProject);
    } catch (error) {
      console.error("Error saving project:", error);
      res.status(500).json({ error: "Failed to save project" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
