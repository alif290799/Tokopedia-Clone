interface FooterListProps {
  footerLinks: FooterList[];
}

interface FooterList {
  text: string;
  href: string;
}

export const FooterContent: React.FC<FooterListProps> = ({footerLinks}) => {
  return (
    <>
      {footerLinks.map((link, indeks) => (
        <a key={indeks} href={link.href}>
          <p className="text-sm text-gray-500 hover:text-green-500 mb-2">{link.text}</p>
        </a>
      ))}
    </>
  );
};
