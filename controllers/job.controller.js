import prisma from "../config/dbConfig.js";

export const fetchJobs = async (req, res) => {
  try {
    const { category, location, search } = req.query;

    const where = {};

    if (category) where.category = category;
    if (location) where.location = location;

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ];
    }

    const jobs = await prisma.job.findMany({
      where,
    });

    return res.status(200).json({
      data: jobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createJob = async (req, res) => {
  try {
    const { title, company, location, category, description } = req.body;

    const job = await prisma.job.create({
      data: {
        title,
        company,
        location,
        category,
        description,
      },
    });

    return res.status(201).json({
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await prisma.job.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    return res.status(200).json({
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await prisma.job.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    return res.status(200).json({
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
