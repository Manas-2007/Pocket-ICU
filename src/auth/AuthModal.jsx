import React, { useEffect, useState } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Stethoscope,
  HeartPulse,
  Building2,
  MapPin,
  CalendarDays,
  Droplets,
  Home,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// 1. Yahan onLoginSuccess add kiya
const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("doctor");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    hospitalName: "",
    hospitalPincode: "",
    age: "",
    bloodGroup: "",
    address: "",
    pincode: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    setError("");
    setSuccess("");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const switchMode = (loginMode) => {
    setIsLogin(loginMode);
    setError("");
    setSuccess("");
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setError("");
    setSuccess("");
  };

  // =================================================================
  // DEV BYPASS: No validation, direct login based on selected role!
  // =================================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("Bypass Successful! Redirecting to Dashboard...");

    // Fake User Data (Jo role selected hoga, waisa user ban jayega)
    const mockUser = {
      id: Date.now(),
      role: role,
      fullName: formData.fullName || (role === "doctor" ? "Dr. Ananya Sharma" : "Patient User"),
      email: formData.email || (role === "doctor" ? "doctor@pocketicu.com" : "patient@pocketicu.com"),
    };

    // Save to local storage
    localStorage.setItem("pocket_icu_current_user", JSON.stringify(mockUser));

    // Redirect to Dashboard
    setTimeout(() => {
      if (onLoginSuccess) onLoginSuccess(mockUser);
      onClose();
    }, 600);
  };

  const inputClass = `
    w-full h-10 sm:h-11
    rounded-xl
    border border-slate-200
    bg-slate-50/80
    px-3.5
    text-[13px] sm:text-sm
    text-slate-800
    placeholder:text-slate-400
    outline-none
    transition-all duration-200
    focus:border-blue-400
    focus:bg-white
    focus:ring-4
    focus:ring-blue-500/10
    hover:border-slate-300
  `;

  const labelClass =
    "mb-1.5 block text-[11px] sm:text-xs font-semibold text-slate-600";

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-[#07142f]/60
        px-3 py-4 sm:px-5
        backdrop-blur-md
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* ================= MODAL ================= */}

      <div
        className="
          relative flex w-full max-w-[550px]
          h-[min(700px,calc(100dvh-28px))]
          sm:h-[min(720px,calc(100dvh-42px))]
          flex-col
          overflow-hidden
          rounded-[26px]
          border border-blue-100/80
          bg-white
          shadow-[0_30px_90px_rgba(15,23,42,0.25)]
        "
      >
        {/* Top gradient border */}

        <div
          className="
            absolute left-0 right-0 top-0 z-30
            h-[3px]
            bg-gradient-to-r
            from-blue-600
            via-cyan-400
            to-emerald-400
          "
        />

        {/* Decorative glow */}

        <div className="
          pointer-events-none
          absolute -right-24 -top-24
          h-60 w-60
          rounded-full
          bg-blue-100/60
          blur-3xl
        " />

        <div className="
          pointer-events-none
          absolute -bottom-24 -left-24
          h-60 w-60
          rounded-full
          bg-emerald-100/50
          blur-3xl
        " />

        {/* ================= CLOSE ================= */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-4 top-4 z-40
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-slate-200
            bg-white/90
            text-slate-500
            shadow-sm
            transition-all duration-200
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            hover:rotate-90
          "
        >
          <X size={17} />
        </button>

        {/* ================= HEADER ================= */}

        <div className="relative shrink-0 px-5 pb-3 pt-7 sm:px-7 sm:pt-8">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-white
                shadow-lg
                shadow-blue-500/20
              "
            >
              <HeartPulse size={21} strokeWidth={2.2} />
            </div>

            <div>
              <h2 className="text-[17px] font-bold tracking-tight text-[#0B122F] sm:text-[19px]">
                Pocket ICU
              </h2>

              <p className="text-[10px] text-slate-400 sm:text-[11px]">
                Intelligent Health Monitoring
              </p>
            </div>
          </div>

          <div className="mt-4 pr-7">
            <div className="flex items-center gap-2">
              <h3 className="text-[21px] font-bold tracking-tight text-slate-900 sm:text-[24px]">
                {isLogin ? "Welcome back" : "Create your account"}
              </h3>

              {!isLogin && (
                <Sparkles
                  size={17}
                  className="text-blue-500"
                />
              )}
            </div>

            <p className="mt-1 text-[12px] leading-5 text-slate-500 sm:text-[13px]">
              {isLogin
                ? "Sign in to continue to your Pocket ICU dashboard."
                : "Set up your profile for smarter health monitoring."}
            </p>
          </div>
        </div>

        {/* ================= ROLE SELECTOR ================= */}

        <div className="relative shrink-0 px-5 sm:px-7">
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-slate-50/80
              p-1
            "
          >
            <div className="grid grid-cols-2 gap-1">
              {/* DOCTOR */}

              <button
                type="button"
                onClick={() => handleRoleChange("doctor")}
                className={`
                  relative flex h-10 items-center justify-center
                  gap-2 rounded-xl
                  text-[12px] font-semibold
                  transition-all duration-200
                  sm:h-11 sm:text-[13px]
                  ${
                    role === "doctor"
                      ? `
                        border border-blue-200
                        bg-blue-50
                        text-blue-700
                        shadow-sm
                      `
                      : `
                        border border-transparent
                        bg-white/60
                        text-slate-500
                        hover:bg-white
                        hover:text-blue-600
                      `
                  }
                `}
              >
                <Stethoscope
                  size={16}
                  className={
                    role === "doctor"
                      ? "text-blue-600"
                      : "text-slate-400"
                  }
                />

                Doctor

                {role === "doctor" && (
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                )}
              </button>

              {/* PATIENT */}

              <button
                type="button"
                onClick={() => handleRoleChange("patient")}
                className={`
                  relative flex h-10 items-center justify-center
                  gap-2 rounded-xl
                  text-[12px] font-semibold
                  transition-all duration-200
                  sm:h-11 sm:text-[13px]
                  ${
                    role === "patient"
                      ? `
                        border border-emerald-200
                        bg-emerald-50
                        text-emerald-700
                        shadow-sm
                      `
                      : `
                        border border-transparent
                        bg-white/60
                        text-slate-500
                        hover:bg-white
                        hover:text-emerald-600
                      `
                  }
                `}
              >
                <HeartPulse
                  size={16}
                  className={
                    role === "patient"
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }
                />

                Patient

                {role === "patient" && (
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= SCROLLABLE FIELDS ================= */}

        <div
          className="
            relative min-h-0 flex-1
            overflow-y-auto
            px-5 pt-4
            sm:px-7 sm:pt-5
            [scrollbar-width:thin]
            [scrollbar-color:#cbd5e1_transparent]
          "
        >
          {/* Added noValidate to avoid browser popups */}
          <form
            id="pocket-icu-auth-form"
            onSubmit={handleSubmit}
            className="space-y-3.5 pb-3"
            noValidate 
          >
            {/* REGISTER FIELDS */}

            {!isLogin && (
              <>
                {/* FULL NAME */}

                <div>
                  <label className={labelClass}>
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="
                        absolute left-3.5 top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name (Optional in Dev)"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* DOCTOR */}

                {role === "doctor" && (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Hospital / Healthcare Facility
                      </label>

                      <div className="relative">
                        <Building2
                          size={16}
                          className="
                            absolute left-3.5 top-1/2
                            -translate-y-1/2
                            text-blue-400
                          "
                        />

                        <input
                          type="text"
                          name="hospitalName"
                          value={formData.hospitalName}
                          onChange={handleChange}
                          placeholder="Hospital name (Optional)"
                          className={`${inputClass} border-blue-100 pl-10 focus:border-blue-400`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Hospital Pincode
                      </label>

                      <div className="relative">
                        <MapPin
                          size={16}
                          className="
                            absolute left-3.5 top-1/2
                            -translate-y-1/2
                            text-blue-400
                          "
                        />

                        <input
                          type="text"
                          name="hospitalPincode"
                          inputMode="numeric"
                          maxLength={6}
                          value={formData.hospitalPincode}
                          onChange={handleChange}
                          placeholder="6-digit (Optional)"
                          className={`${inputClass} border-blue-100 pl-10 focus:border-blue-400`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PATIENT */}

                {role === "patient" && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>
                          Age
                        </label>

                        <div className="relative">
                          <CalendarDays
                            size={16}
                            className="
                              absolute left-3.5 top-1/2
                              -translate-y-1/2
                              text-emerald-400
                            "
                          />

                          <input
                            type="number"
                            name="age"
                            min="1"
                            max="120"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Age"
                            className={`${inputClass} border-emerald-100 pl-10 focus:border-emerald-400 focus:ring-emerald-500/10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Blood Group
                        </label>

                        <div className="relative">
                          <Droplets
                            size={16}
                            className="
                              absolute left-3.5 top-1/2
                              -translate-y-1/2
                              text-rose-400
                            "
                          />

                          <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none border-emerald-100 pl-10 focus:border-emerald-400 focus:ring-emerald-500/10`}
                          >
                            <option value="">
                              Select
                            </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>
                          Residential Address
                        </label>

                        <div className="relative">
                          <Home
                            size={16}
                            className="
                              absolute left-3.5 top-3
                              text-emerald-400
                            "
                          />

                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Your address"
                            rows={2}
                            className={`${inputClass} h-[76px] resize-none border-emerald-100 pl-10 pt-2.5 focus:border-emerald-400 focus:ring-emerald-500/10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Pincode
                        </label>

                        <div className="relative">
                          <MapPin
                            size={16}
                            className="
                              absolute left-3.5 top-1/2
                              -translate-y-1/2
                              text-emerald-400
                            "
                          />

                          <input
                            type="text"
                            name="pincode"
                            inputMode="numeric"
                            maxLength={6}
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder="6-digit pincode"
                            className={`${inputClass} border-emerald-100 pl-10 focus:border-emerald-400 focus:ring-emerald-500/10`}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {/* EMAIL */}

            <div>
              <label className={labelClass}>
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Optional in Dev Mode"
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div
              className={
                !isLogin
                  ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                  : ""
              }
            >
              <div>
                <label className={labelClass}>
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={16}
                    className="
                      absolute left-3.5 top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Optional in Dev Mode"
                    className={`${inputClass} pl-10 pr-10`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="
                      absolute right-3.5 top-1/2
                      -translate-y-1/2
                      text-slate-400
                      transition hover:text-blue-600
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}

              {!isLogin && (
                <div>
                  <label className={labelClass}>
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={16}
                      className="
                        absolute left-3.5 top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={`${inputClass} pl-10 pr-10`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute right-3.5 top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition hover:text-blue-600
                      "
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* LOGIN OPTIONS */}

            {isLogin && (
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex cursor-pointer items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
                  <input
                    type="checkbox"
                    className="
                      h-3.5 w-3.5
                      rounded border-slate-300
                      accent-blue-600
                    "
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="
                    text-[11px]
                    font-semibold
                    text-blue-600
                    hover:text-blue-700
                    sm:text-xs
                  "
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* REGISTER TERMS */}

            {!isLogin && (
              <label
                className="
                  flex cursor-pointer
                  items-start gap-2
                  pt-0.5
                  text-[10.5px]
                  leading-4
                  text-slate-500
                  sm:text-[11px]
                "
              >
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="
                    mt-0.5 h-3.5 w-3.5
                    shrink-0 rounded
                    border-slate-300
                    accent-blue-600
                  "
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>
            )}

            {/* ERROR */}

            {error && (
              <div
                className="
                  rounded-xl
                  border border-rose-200
                  bg-rose-50
                  px-3 py-2.5
                  text-[11px]
                  leading-4
                  text-rose-600
                "
              >
                {error}
              </div>
            )}

            {/* SUCCESS */}

            {success && (
              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-emerald-200
                  bg-emerald-50
                  px-3 py-2.5
                  text-[11px]
                  text-emerald-700
                "
              >
                <CheckCircle2 size={15} />

                {success}
              </div>
            )}
          </form>
        </div>

        {/* ================= FIXED FOOTER ================= */}

        <div
          className="
            relative shrink-0
            border-t border-slate-100
            bg-white/95
            px-5 pb-4 pt-3
            backdrop-blur-xl
            sm:px-7 sm:pb-5 sm:pt-4
          "
        >
          {/* Submit */}

          <button
            type="submit"
            form="pocket-icu-auth-form"
            className={`
              group flex h-11 w-full
              items-center justify-center gap-2
              rounded-xl
              text-[13px]
              font-semibold
              text-white
              shadow-lg
              transition-all duration-200
              hover:-translate-y-0.5
              active:translate-y-0
              sm:h-12 sm:text-sm
              ${
                role === "doctor"
                  ? `
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-600
                    to-cyan-500
                    shadow-blue-500/20
                    hover:shadow-blue-500/30
                  `
                  : `
                    bg-gradient-to-r
                    from-emerald-600
                    via-emerald-500
                    to-teal-500
                    shadow-emerald-500/20
                    hover:shadow-emerald-500/30
                  `
              }
            `}
          >
            {isLogin ? "Sign In (Dev Bypass)" : "Create Account (Dev Bypass)"}

            <ArrowRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </button>

          {/* Login/Register switch */}

          <div className="mt-3 text-center">
            {isLogin ? (
              <p className="text-[11px] text-slate-500 sm:text-xs">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode(false)}
                  className="
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    hover:underline
                  "
                >
                  Create one
                </button>
              </p>
            ) : (
              <p className="text-[11px] text-slate-500 sm:text-xs">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode(true)}
                  className="
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    hover:underline
                  "
                >
                  Login
                </button>
              </p>
            )}
          </div>

          {/* Security */}

          <div
            className="
              mt-2
              flex items-center justify-center
              gap-1.5
              text-[9.5px]
              text-slate-400
              sm:text-[10px]
            "
          >
            <ShieldCheck
              size={13}
              className="text-emerald-500"
            />

            <span>
              Secure & privacy-focused health platform
            </span>

            <Sparkles
              size={11}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;