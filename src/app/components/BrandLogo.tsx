import logo from "@/assets/logo.png";

interface BrandLogoProps {
  className?: string;
  /** Kept for API compatibility with existing call sites; the lockup image
   *  already includes the wordmark + tagline, so these are no-ops. */
  tagline?: boolean;
  light?: boolean;
}

/**
 * BrandInk logo — the official stacked lockup (blue "B" pen-nib mark with the
 * "BrandInk / Creative Agency" wordmark). Control the size with a height
 * utility on `className` (e.g. `h-[48px]`).
 */
export function BrandLogo({ className }: BrandLogoProps) {
  return <img src={logo} alt="BrandInk Creative Agency" className={className} />;
}
