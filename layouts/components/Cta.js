"use client";
import { markdownify } from "../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Cta({ cta }) {
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, message: "" });
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            <form className="mt-6 space-y-4 text-left max-w-md mx-auto" onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus({ loading: true, success: null, message: "" });
              const form = e.target;
              const data = {
                name: form[0].value,
                email: form[1].value,
                message: form[2].value,
                subject: cta?.title || 'Liên hệ CTA'
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
              <input
                className="form-input w-full rounded"
                name="name"
                type="text"
                placeholder="Họ và tên"
                required
              />
              <input
                className="form-input w-full rounded"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="form-textarea w-full rounded-md"
                rows="4"
                name="message"
                placeholder="Nội dung liên hệ"
                required
              />
              <button type="submit" className="btn btn-primary w-full">
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
