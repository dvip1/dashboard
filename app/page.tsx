import Image from "next/image";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      <section className="flex">
        <div className="">
          <SideBar />
        </div>
        <MainContent/>
      </section>
    </div>

  );
}
