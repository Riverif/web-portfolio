import { NavSide } from "@/components/nav-side";
import { Socials } from "@/components/socials";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Socials />
      <NavSide />
      {children}
    </div>
  );
}
