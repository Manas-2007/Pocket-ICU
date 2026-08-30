import React, { useEffect, useState } from 'react';

const ContactTab = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    if (!isOpen) setSubmitted(false);

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07142F]/45 backdrop-blur-md px-3 py-4 sm:px-5">

      <div className="
        relative w-full max-w-[860px]
        rounded-[24px]
        bg-[#f8faff]
        border border-white
        shadow-[0_25px_70px_rgba(7,20,47,0.22)]
        overflow-hidden
      ">

        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 sm:top-4 sm:right-4 z-20
            flex h-8 w-8 sm:h-9 sm:w-9
            items-center justify-center
            rounded-full bg-gray-100
            text-gray-500
            hover:bg-gray-200 hover:text-gray-800
            transition
          "
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-white px-5 sm:px-8 pt-3 sm:pt-5 pb-2 border-b border-gray-100">

          <span className="
            inline-flex rounded-full
            bg-blue-50 px-2.5 py-1
            text-[9px] sm:text-[10px]
            font-bold uppercase tracking-[0.17em]
            text-blue-600
          ">
            Get In Touch
          </span>

          <h2 className="
            mt-2
            text-[1.45rem] sm:text-[1.8rem] lg:text-[1.7rem]
            font-bold leading-tight tracking-tight
            text-[#0B122F]
            pr-8
          ">
            Connect with Pocket ICU
          </h2>

          <p className="
            mt-1
            text-[11px] sm:text-[13px]
            font-medium text-gray-500
          ">
            Questions, collaboration, or hospital deployment? Let's connect.
          </p>

        </div>

        {/* Main */}
        <div className="p-4 sm:p-6 lg:p-7">

          {submitted ? (

            <div className="
              flex flex-col items-center justify-center
              min-h-[260px]
              rounded-2xl
              bg-emerald-50
              border border-emerald-100
              text-center px-5
            ">

              <div className="
                flex h-12 w-12 items-center justify-center
                rounded-full bg-emerald-100
                text-xl font-bold text-emerald-600
              ">
                ✓
              </div>

              <h3 className="mt-3 text-[18px] font-bold text-gray-900">
                Message Sent
              </h3>

              <p className="mt-1 max-w-sm text-[12px] sm:text-[13px] font-medium text-gray-600">
                Thanks for reaching out. Our team will get back to you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="
                  mt-4 rounded-xl
                  bg-[#0B5CFF]
                  px-5 py-2
                  text-[12px] font-bold text-white
                  hover:bg-blue-700 transition
                "
              >
                Send Another
              </button>

            </div>

          ) : (

            <div className="
              grid grid-cols-1
              lg:grid-cols-[0.78fr_1.22fr]
              gap-4 sm:gap-5 lg:gap-6
            ">

              {/* Contact Card */}
              <div className="
                relative overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-[#091F45]
                via-[#104078]
                to-[#1265A5]
                p-5 sm:p-6
                text-white
              ">

                <div className="relative z-10">

                  <div className="
                    flex h-9 w-9 items-center justify-center
                    rounded-xl bg-white/10
                    ring-1 ring-white/15
                  ">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 0114.5-6A8.38 8.38 0 0121 10.5z"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-4 text-[17px] sm:text-[18px] font-bold">
                    Let's Connect
                  </h3>

                  <p className="
                    mt-1.5
                    text-[11px] sm:text-[12px]
                    font-medium leading-relaxed
                    text-blue-100/80
                  ">
                    For technical discussions, collaboration,
                    and hospital deployment.
                  </p>

                  <div className="mt-5 space-y-2.5">

                    <div className="
                      flex items-center gap-2.5
                      rounded-xl
                      bg-white/10
                      px-3 py-2
                      ring-1 ring-white/10
                    ">
                      <span className="text-blue-200 text-sm">@</span>

                      <div className="min-w-0">
                        <p className="text-[8px] uppercase tracking-wider text-blue-200/70">
                          Email
                        </p>
                        <p className="truncate text-[10px] sm:text-[11px] font-semibold">
                          support@pocketicu.ai
                        </p>
                      </div>
                    </div>

                    <div className="
                      flex items-center gap-2.5
                      rounded-xl
                      bg-white/10
                      px-3 py-2
                      ring-1 ring-white/10
                    ">
                      <span className="text-blue-200 text-sm">#</span>

                      <div>
                        <p className="text-[8px] uppercase tracking-wider text-blue-200/70">
                          Event
                        </p>
                        <p className="text-[10px] sm:text-[11px] font-semibold">
                          Smart India Hackathon 2026
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="
                  pointer-events-none absolute
                  -right-14 -bottom-16
                  h-36 w-36
                  rounded-full
                  bg-blue-300/10 blur-3xl
                " />

              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <label className="mb-1 block text-[13px] font-bold text-gray-700">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Dr. Alex Morgan"
                      className="
                        w-full rounded-xl
                        border border-gray-200
                        bg-white
                        px-3 py-2.5
                        text-[12px] font-medium
                        outline-none
                        focus:border-blue-500
                        focus:ring-2 focus:ring-blue-500/10
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-bold text-gray-700">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="alex@hospital.org"
                      className="
                        w-full rounded-xl
                        border border-gray-200
                        bg-white
                        px-3 py-2.5
                        text-[12px] font-medium
                        outline-none
                        focus:border-blue-500
                        focus:ring-2 focus:ring-blue-500/10
                      "
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-bold text-gray-700">
                    Inquiry Type
                  </label>

                  <select
                    className="
                      w-full rounded-xl
                      border border-gray-200
                      bg-white
                      px-3 py-2.5
                      text-[12px] font-medium text-gray-700
                      outline-none
                      focus:border-blue-500
                    "
                  >
                    <option>Hospital Trial & Integration</option>
                    <option>Sensor Hardware</option>
                    <option>Hackathon Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-bold text-gray-700">
                    Message
                  </label>

                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us how we can help..."
                    className="
                      w-full resize-none rounded-xl
                      border border-gray-200
                      bg-white
                      px-3 py-2.5
                      text-[12px] font-medium
                      outline-none
                      focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/10
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full rounded-xl
                    bg-[#0B5CFF]
                    py-2.5
                    text-[13px]
                    font-bold text-white
                    shadow-lg shadow-blue-500/20
                    hover:bg-blue-700
                    active:scale-[0.99]
                    transition-all
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default ContactTab;