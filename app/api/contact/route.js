import { NextResponse } from 'next/server';

// Email service configuration - Thay đổi email của bạn ở đây
const EMAIL_CONFIG = {
  to: 'your-email@gmail.com', // ⚠️ THAY ĐỔI: Email của bạn để nhận thông tin liên hệ
  from: 'your-email@gmail.com', // ⚠️ THAY ĐỔI: Email của bạn để gửi
  subject: 'Liên hệ mới từ website D9 Media Agency'
};

// Email sending function with Gmail
async function sendEmail(data) {
  const { name, email, subject, message, phone } = data;
  
  // HTML template for email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Liên hệ mới từ website</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2563eb; }
        .value { margin-left: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Liên hệ mới từ website</h1>
          <p>D9 Media Agency</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">👤 Tên khách hàng:</span>
            <span class="value">${name}</span>
          </div>
          <div class="field">
            <span class="label">📧 Email:</span>
            <span class="value">${email}</span>
          </div>
          <div class="field">
            <span class="label">📱 Số điện thoại:</span>
            <span class="value">${phone || 'Không có'}</span>
          </div>
          <div class="field">
            <span class="label">📝 Tiêu đề:</span>
            <span class="value">${subject}</span>
          </div>
          <div class="field">
            <span class="label">💬 Nội dung:</span>
            <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div class="field">
            <span class="label">⏰ Thời gian:</span>
            <span class="value">${new Date().toLocaleString('vi-VN')}</span>
          </div>
        </div>
        <div class="footer">
          <p>Email này được gửi tự động từ form liên hệ trên website D9 Media Agency</p>
          <p>Vui lòng phản hồi trong thời gian sớm nhất!</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // For now, we'll just log the email content
  // In production, you should integrate with a real email service
  console.log('=== EMAIL CONTENT ===');
  console.log('To:', EMAIL_CONFIG.to);
  console.log('From:', EMAIL_CONFIG.from);
  console.log('Subject:', EMAIL_CONFIG.subject);
  console.log('HTML Content:', htmlContent);
  console.log('=====================');

  // TODO: Uncomment và cấu hình email service bên dưới
  
  // Option 1: Gmail với Nodemailer
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransporter({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER, // your-email@gmail.com
  //     pass: process.env.EMAIL_PASS, // App Password từ Google
  //   },
  // });
  // await transporter.sendMail({
  //   from: EMAIL_CONFIG.from,
  //   to: EMAIL_CONFIG.to,
  //   subject: EMAIL_CONFIG.subject,
  //   html: htmlContent,
  // });

  // Option 2: SendGrid (miễn phí 100 email/ngày)
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: EMAIL_CONFIG.to,
  //   from: EMAIL_CONFIG.from,
  //   subject: EMAIL_CONFIG.subject,
  //   html: htmlContent,
  // });

  // Option 3: Resend.com (miễn phí 100 email/ngày)
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: EMAIL_CONFIG.from,
  //   to: EMAIL_CONFIG.to,
  //   subject: EMAIL_CONFIG.subject,
  //   html: htmlContent,
  // });

  return true;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ' },
        { status: 400 }
      );
    }

    // Phone validation (optional)
    if (phone) {
      const phoneRegex = /^[0-9+\-\s()]+$/;
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { error: 'Số điện thoại không hợp lệ' },
          { status: 400 }
        );
      }
    }

    // Log contact submission
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      phone,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    });

    // Send email
    try {
      await sendEmail({ name, email, subject, message, phone });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log it
    }

    // TODO: Save to database (optional)
    // Example with MongoDB:
    // const { MongoClient } = require('mongodb');
    // const client = new MongoClient(process.env.MONGODB_URI);
    // await client.connect();
    // const db = client.db('d9media');
    // await db.collection('contacts').insertOne({
    //   name, email, subject, message, phone,
    //   timestamp: new Date(),
    //   ip: request.headers.get('x-forwarded-for')
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra, vui lòng thử lại sau' },
      { status: 500 }
    );
  }
} 