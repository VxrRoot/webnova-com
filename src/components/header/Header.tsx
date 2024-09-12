import ContainerLayout from "@/src/layouts/ContainerLayout";
import dynamic from "next/dynamic";
import Nav from "../nav/Nav";

// const Nav = dynamic(() => import("../nav/Nav"), { ssr: false });

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30 py-2 lg:py-8 bg-black/50">
      <ContainerLayout>
        <Nav />
      </ContainerLayout>
    </header>
  );
};

export default Header;
