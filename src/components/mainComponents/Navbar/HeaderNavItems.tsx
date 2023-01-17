import { HeaderNavItemStructure, NavItemData } from "./navbarIndex";

export const HeaderNavItems = (props: { event: () => void }) => {
  return (
    <nav className="flex flex-col lg:flex-row">
      {NavItemData.map((data, idx) => (
        <HeaderNavItemStructure
          event={props.event}
          key={idx}
          href={data.href}
          text={data.text}
        />
      ))}
    </nav>
  );
};
