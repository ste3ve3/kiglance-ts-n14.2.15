import images from "@/utils/images";
import Button from "./Button";
import Image from "next/image";

const NavBar = () => {
  return (
    <section className="w-screen bg-dark-blue text-white fixed top-0 py-3">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Image src={images.navIcon} alt="navIcon" />
          <span className="font-semibold">Tech Trendin</span>
        </div>
        <div className="flex items-center gap-3">
          <ul className="gap-3 hidden md:flex">
            <li className="flex gap-1 items-center">
              <Image src={images.homeIcon} alt="home" />
              <span className="text-sm font-medium">Home</span>
            </li>
            <li className="flex gap-1 items-center">
              <Image src={images.communityIcon} alt="home" />
              <span className="text-sm font-medium text-light-gray">
                Community
              </span>
            </li>
          </ul>
          <Button
            text="Log In"
            background="bg-dark-gray"
            className="border-gray-500 text-light-gray hover:bg-dark-gray/90 text-sm"
          />
          <Button
            text="Sign Up"
            background="bg-light-purple"
            className="hover:bg-light-purple/90 text-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
