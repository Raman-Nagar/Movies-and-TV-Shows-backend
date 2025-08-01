import pkg from "@prisma/client";
import { entrySchema } from "../schemas/entrySchema.js  ";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const addEntry = async (req, res) => {
  try {
    const data = entrySchema.parse({
      ...req.body,
      budget: Number(req.body.budget),
      year: Number(req.body.year),
    });

    const newEntry = await prisma.entry.create({ data });
    res.status(201).json(newEntry);
  } catch (err) {
    console.log("Error: ", err);
    res.status(400).json({ error: err });
  }
};

const getEntries = async (req, res) => {
  try {
    const cursor = req.query.offset ? Number(req.query.offset) : undefined;
    const take = req.query.limit ? Number(req.query.limit) : 10;
    const search = req.query.search?.toString().trim(); // new

    const entries = await prisma.entry.findMany({
      take,
      skip: cursor ? 1 : 0, // Skip the cursor item itself
      ...(cursor && { cursor: { id: cursor } }),
      orderBy: { createdAt: "desc" },
      where: search
        ? {
            title: {
              contains: search,
            },
          }
        : undefined,
    });
    res.status(200).json({ entries });
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getStats = async (_req, res) => {
  try {
    const [total, movies, tv_shows] = await Promise.all([
      prisma.entry.count(),
      prisma.entry.count({ where: { type: "movie" } }),
      prisma.entry.count({ where: { type: "tv-show" } }),
    ]);
    res.status(200).json({ total, movies, tv_shows });
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateEntry = async (req, res) => {
  try {
    const data = entrySchema.parse({
      ...req.body,
      budget: Number(req.body.budget),
      year: Number(req.body.year),
    });
    const updated = await prisma.entry.update({
      where: { id: Number(req.params.id) },
      data,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteEntry = async (req, res) => {
  try {
    await prisma.entry.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export { getEntries, getStats, addEntry, updateEntry, deleteEntry };
