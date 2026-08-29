import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-sunset text-evening font-bold hover:bg-sunset-glow active:bg-sunset-deep",
  secondary:
    "border-2 border-moonlight text-moonlight font-bold hover:border-sunset hover:text-sunset",
  ghost:
    "text-moonlight font-semibold hover:text-sunset",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition disabled:opacity-50";

interface Base {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type Props =
  | (Base & { to: string; href?: never; onClick?: never })
  | (Base & { href: string; to?: never; onClick?: never; target?: string; download?: boolean | string })
  | (Base & { onClick: () => void; to?: never; href?: never; disabled?: boolean });

export default function Button(props: Props) {
  const { children, variant = "primary", className = "" } = props;
  const cls = `${base} ${variantClasses[variant]} ${className}`;

  if ("to" in props && props.to) {
    return <Link to={props.to} className={cls}>{children}</Link>;
  }
  if ("href" in props && props.href) {
    const rel = props.target === "_blank" ? "noopener noreferrer" : undefined;
    return (
      <a href={props.href} target={props.target} rel={rel} download={props.download} className={cls}>
        {children}
      </a>
    );
  }
  if ("onClick" in props && props.onClick) {
    return <button onClick={props.onClick} disabled={props.disabled} className={cls}>{children}</button>;
  }
  return null;
}