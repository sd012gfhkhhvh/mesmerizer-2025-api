console.log("utils");
const nodemailer = require("nodemailer");
// import { query as db } from "./db/db.js";

import jwt from "jsonwebtoken";
// import logger from "./config/logger.js";
// generateToken function for user
export const generateToken = function (email, id) {
  try {
    const payload = { email, id };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: process.env.JWT_LIFETIME };
    return jwt.sign(payload, secret, options);
  } catch (err) {
    console.error(err);
    return null;
  }
};

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL, // Your email
//     pass: process.env.EMAIL_PASSWORD, // Your email password or app password
//   },
// });

// Function to send an email
// export const sendMail = async ({ to, subject, content } = {}) => {
//   try {
//     if (!to || !subject || !text) {
//       return false;
//     }
//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: to,
//       subject: subject,
//       // text: text, // For plain text email
//       html: content, // For HTML email
//     };

//     const info = await transporter.sendMail(mailOptions);
//     logger.info("Email sent: " + info.response);
//     return info;
//   } catch (error) {
//     logger.error("Error sending email:", error);
//     throw error;
//   }
// };

// export const getParticipantById = async (id = null) => {
//   try {
//     if (!id) {
//       return null;
//     }

//     const res = await db("SELECT * FROM participants where id = $1", [id]);
//     if (res.rowCount === 0) {
//       return null;
//     }

//     return res.rows[0];
//   } catch (error) {
//     logger.error(error);
//   }
// };

// export const getMailTemplateById = async (id = null) => {
//   try {
//     if (!id) {
//       return null;
//     }

//     const res = await db("SELECT * FROM email_templates where id = $1", [id]);
//     if (res.rowCount === 0) {
//       return null;
//     }

//     return res.rows[0];
//   } catch (error) {
//     logger.error(error);
//   }
// };

// export const mapEmailTemplateIdToStatus = (status = null) => {
//   switch (status) {
//     case "approved":
//       return "approval";
//     case "rejected":
//       return "rejection";
//     default:
//       return null;
//   }
// };

// export const constructMailBody = ({ participant, template } = {}) => {
//   if (!participant || !template) {
//     return null;
//   }
//   const mailBody = template.content
//     .replace("{{name}}", participant.name)
//     .replace("{{event}}", participant.event);
//   return mailBody;
// };
