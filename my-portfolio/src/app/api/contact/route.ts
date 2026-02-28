import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { objective, email, name, details } = await req.json();

        if (!email || !details || !name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer transporter using standard Gmail SMTP
        // The user MUST configure their own EMAIL_USER and EMAIL_PASS (App Password) in Vercel.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to themselves!
            replyTo: email,
            subject: `UPLINK: New Client Request - ${name} (${objective})`,
            html: `
                <div style="font-family: monospace; background: #050505; color: #34d399; padding: 20px;">
                    <h2 style="color: #fff; border-bottom: 1px solid #34d399; padding-bottom: 10px;">> NEW COMM-LINK ESTABLISHED</h2>
                    <p><strong>OBJECTIVE:</strong> ${objective}</p>
                    <p><strong>SENDER EMAIL:</strong> ${email}</p>
                    <p><strong>SENDER NAME:</strong> ${name}</p>
                    <br/>
                    <h3 style="color: #fff;">> TRANSMISSION PAYLOAD:</h3>
                    <div style="background: #080808; padding: 15px; border: 1px solid #34d399; white-space: pre-wrap;">
${details}
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Transmission successful.' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Transmission failed.' }, { status: 500 });
    }
}
