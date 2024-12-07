import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import MainContent from "@/components/MainContent";
import LeadInfo from "@/components/LeadInfo";
export default function Home() {
  return (
    <div className="min-h-screen  ">
      <div className="w-full ">
        <NavBar></NavBar>
      </div>
      <section className="flex min-h-screen">
        <div className="">
          <SideBar />
        </div>
        <div className="content flex flex-col w-full">
          <div className="w-full h-fit">
            <MainContent />
          </div>
          <LeadInfo />
        </div>
      </section>
    </div>

  );
}
