import ContainerLayout from "@/src/layouts/ContainerLayout";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full  z-30 py-2 lg:py-4 overflow-hidden bg-black/50">
      <ContainerLayout>
        <Nav />
      </ContainerLayout>
    </header>
  );
};

export default Header;
