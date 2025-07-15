"use client";
import { useState } from "react";

export default function ContactForm({ projectName }) {
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, message: "" });

  return (
    <form className="space-y-4" onSubmit={async (e) => {
      e.preventDefault();
      setFormStatus({ loading: true, success: null, message: "" });
      const form = e.target;
      const data = {
        name: form[0].value,
        email: form[1].value,
        phone: form[2].value,
        message: form[3].value,
        subject: `Liên hệ tư vấn dự án: ${projectName}`
      };
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok) {
          setFormStatus({ loading: false, success: true, message: result.message || 'Gửi liên hệ thành công!' });
          form.reset();
        } else {
          setFormStatus({ loading: false, success: false, message: result.error || 'Gửi liên hệ thất bại!' });
        }
      } catch (err) {
        setFormStatus({ loading: false, success: false, message: 'Có lỗi xảy ra, vui lòng thử lại sau!' });
      }
    }}>
      {formStatus.loading && <div className="text-blue-600 font-semibold">Đang gửi...</div>}
      {formStatus.success === true && <div className="text-green-600 font-semibold">{formStatus.message}</div>}
      {formStatus.success === false && <div className="text-red-600 font-semibold">{formStatus.message}</div>}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Họ và tên</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập họ tên của bạn" required />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập email của bạn" required />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Số điện thoại</label>
        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập số điện thoại" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Nội dung</label>
        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows={3} placeholder="Nhập nội dung liên hệ" required />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-all text-base uppercase tracking-wide">Gửi liên hệ</button>
    </form>
  );
} 