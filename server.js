import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Email sending route
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'recipient-email@example.com', // Change this to the email you want to receive messages
    subject: 'New Contact Form Submission',
    text: `You have a new message from:

    Name: ${firstName} ${lastName}
    Email: ${email}
    Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
