import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const CtaButton = ({
  to,
  children,
  variant = "pill", // "pill" | "circle"
  icon: Icon = ArrowRight,
  float = false,
  external = true,
  className = "",
  ...rest
}) => {
  const floatClass = float ? "animate-float" : "";
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (variant === "circle") {
    return (
      <Link
        to={to}
        {...linkProps}
        aria-label={rest["aria-label"] || "Get started"}
        className={`${floatClass} flex items-center justify-center bg-[#E67E00] text-white w-[52px] h-[52px] rounded-full transition-all duration-300 hover:bg-[#c96e00] hover:rotate-45 hover:scale-105 active:scale-95 ${className}`}
      >
        <Icon className="w-6 h-6" />
      </Link>
    );
  }

  return (
    <Link
      to={to}
      {...linkProps}
      className={`${floatClass} relative overflow-hidden flex items-center justify-center bg-[#E67E00] text-white px-7 py-3.5 rounded-full font-semibold text-base group/cta transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      <span className="absolute inset-0 bg-[#c96e00] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/cta:scale-x-100"></span>
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default CtaButton;
