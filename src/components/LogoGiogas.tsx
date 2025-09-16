// Logo da GIOGÁS para uso na Navbar
import Image from "next/image";

export default function LogoGiogas({ className = "", ...props }) {
  return (
    <Image
      src="/logo-giogas.png"
      alt="Logo GIOGÁS"
      width={140}
      height={50}
      className={className}
      priority
      {...props}
    />
  );
}
