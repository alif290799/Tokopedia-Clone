interface HeaderListProps {
    links: Link[];
}

interface Link {
  text: string;
  href: string;
}

const HeaderList: React.FC<HeaderListProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          <p className="hover:text-green-500">{link.text}</p>
        </a>
      ))}
    </>
  );
};

export default HeaderList;
