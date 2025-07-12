import config from "../../config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  const { base_url, logo, logo_text, title } = config.site;

  return (
    <Link
      href={base_url}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px', width: 'auto', minHeight: 0, minWidth: 0, padding: 0, margin: 0 }}
    >
      {src || logo ? (
        <Image
          src={src ? src : logo}
          alt={title}
          priority
          width={120}
          height={48}
          style={{
            objectFit: "contain",
            height: "48px",
            width: "auto",
            maxWidth: "120px",
            display: "block",
            padding: 0,
            margin: 0
          }}
        />
      ) : logo_text ? (
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{logo_text}</span>
      ) : (
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</span>
      )}
    </Link>
  );
};

export default Logo;
