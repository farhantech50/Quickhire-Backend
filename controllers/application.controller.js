import prisma from "../config/dbConfig.js";

export const createApplication = async (req, res) => {
  try {
    const { fullName, email, resumeUrl, coverNote, jobId } = req.body;

    const application = await prisma.application.create({
      data: {
        name: fullName,
        email: email,
        resume_link: resumeUrl,
        cover_note: coverNote,
        job_id: parseInt(jobId),
      },
    });

    return res.status(201).json({
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
