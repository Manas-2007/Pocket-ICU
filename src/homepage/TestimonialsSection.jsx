import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: 'NS',
      name: 'Dr. Neha Sharma',
      role: 'Cardiologist, Delhi',
      review:
        'Pocket ICU has transformed the way we monitor patients. The real-time alerts and AI insights are game-changers for our daily operations.',
      color: 'blue',
      avatar: 'bg-blue-600',
      border: 'border-blue-100',
      icon: 'text-blue-500',
      star: 'text-blue-500',
    },
    {
      initials: 'RI',
      name: 'Dr. Rahul Iyer',
      role: 'Emergency Physician',
      review:
        'The on-device intelligence during disasters ensures we never lose track of critical patients. It is incredibly reliable when it matters most.',
      color: 'indigo',
      avatar: 'bg-indigo-600',
      border: 'border-indigo-100',
      icon: 'text-indigo-500',
      star: 'text-indigo-500',
    },
    {
      initials: 'AV',
      name: 'Dr. Ananya Verma',
      role: 'ICU Specialist',
      review:
        'Reliable, accurate, and remarkably easy to use. Exactly what modern healthcare facilities need to scale their patient monitoring systems today.',
      color: 'emerald',
      avatar: 'bg-emerald-600',
      border: 'border-emerald-100',
      icon: 'text-emerald-500',
      star: 'text-emerald-500',
    },
  ];

  return (
    <section className="w-full bg-[#fcfdff] py-3 lg:py-16 px-4 lg:px-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 lg:mb-14 flex flex-col items-center px-2">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="text-[10px] lg:text-[11px] font-bold text-blue-600 uppercase tracking-[0.18em]">
              Trusted Healthcare
            </span>
          </div>

          <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] font-bold text-[#0B122F] leading-tight tracking-tight">
            Loved by Doctors.{' '}
            <span className="text-blue-600">
              Trusted by Hospitals.
            </span>
          </h2>

          <p className="mt-3 text-[13px] lg:text-[15px] text-gray-500 font-medium max-w-2xl leading-relaxed">
            See how healthcare professionals experience smarter,
            faster, and more reliable patient monitoring with Pocket ICU.
          </p>

          <div className="w-12 h-1 bg-blue-600 rounded-full mt-5"></div>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                group relative bg-white
                rounded-[22px] lg:rounded-[26px]
                p-6 lg:p-8
                border ${item.border}
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                transition-all duration-300
                flex flex-col
                min-h-[300px]
                overflow-hidden
              `}
            >

              {/* Top Accent */}
              <div
                className={`
                  absolute top-0 left-0 w-full h-[3px]
                  ${item.color === 'blue'
                    ? 'bg-blue-500'
                    : item.color === 'indigo'
                    ? 'bg-indigo-500'
                    : 'bg-emerald-500'
                  }
                `}
              ></div>

              {/* Quote Icon */}
              <div
                className={`
                  absolute top-6 right-6
                  w-10 h-10
                  rounded-xl
                  bg-gray-50
                  flex items-center justify-center
                  ${item.icon}
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                `}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 17H4.5A1.5 1.5 0 013 15.5V11a5 5 0 015-5h1.5v3H8a2 2 0 00-2 2v1h3a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 019 17H7.17zm10 0H14.5a1.5 1.5 0 01-1.5-1.5V11a5 5 0 015-5h1.5v3H18a2 2 0 00-2 2v1h3a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-1.33z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${item.star}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.71 8.719c-.783-.57-.38-1.81.588-1.81H6.76a1 1 0 00.95-.69l1.34-3.292z" />
                  </svg>
                ))}
                <span className="ml-1.5 text-[11px] font-semibold text-gray-400">
                  5.0
                </span>
              </div>

              {/* Review */}
              <p className="text-[13px] lg:text-[14px] text-gray-600 font-medium leading-[1.8] mb-8">
                “{item.review}”
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 w-full mb-5"></div>

              {/* Doctor Info */}
              <div className="mt-auto flex items-center gap-3.5">

                <div
                  className={`
                    w-11 h-11 lg:w-12 lg:h-12
                    rounded-full
                    ${item.avatar}
                    flex items-center justify-center
                    text-white
                    font-bold
                    text-[13px] lg:text-[14px]
                    shadow-sm
                  `}
                >
                  {item.initials}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] lg:text-[15px] font-bold text-gray-900 leading-tight">
                    {item.name}
                  </span>

                  <span className="text-[11px] lg:text-[12px] font-medium text-gray-500 mt-1">
                    {item.role}
                  </span>
                </div>

                {/* Verified */}
                <div className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 6"
                    />
                  </svg>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="mt-10 lg:mt-14 flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-5">

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <span className="text-[11px] lg:text-[13px] font-semibold text-gray-500">
              Built for modern healthcare
            </span>
          </div>

          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300"></div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <span className="text-[11px] lg:text-[13px] font-semibold text-gray-500">
              Real-time patient monitoring
            </span>
          </div>

        </div>

        {/* ================= TECHNOLOGY PARTNERS ================= */}
        <div className="mt-14 lg:mt-20">

          <div className="text-center mb-6 lg:mb-8">
            <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.22em]">
              Powered By
            </span>
          </div>

          <div className="w-full border-y border-gray-100 py-6 lg:py-8 overflow-hidden">

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-20">

              {/* NVIDIA */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-[#76B900]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-[17px] font-bold text-[#76B900]">
                  NVIDIA
                </span>
              </div>

              {/* Google Cloud */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-[#4285F4]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>

                <span className="text-[16px] font-medium text-gray-600">
                  Google Cloud
                </span>
              </div>

              {/* AWS */}
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-[21px] font-bold text-[#FF9900]">
                  aws
                </span>
              </div>

              {/* TensorFlow */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-[#FF6F00]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>

                <span className="text-[16px] font-bold text-[#FF6F00]">
                  TensorFlow
                </span>
              </div>

              {/* ROS */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="4" cy="4" r="2" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="20" cy="4" r="2" />
                  <circle cx="4" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="20" cy="12" r="2" />
                  <circle cx="4" cy="20" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <circle cx="20" cy="20" r="2" />
                </svg>

                <span className="text-[17px] font-medium text-indigo-700">
                  ROS
                </span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-[#47A248]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v5.93zm2 .07V15l4.79-4.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
                </svg>

                <span className="text-[16px] font-bold text-[#47A248]">
                  MongoDB
                </span>
              </div>

              {/* React */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-[#61DAFB]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(30 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(-30 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(90 12 12)"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                  />
                </svg>

                <span className="text-[16px] font-medium text-[#61DAFB]">
                  React
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;