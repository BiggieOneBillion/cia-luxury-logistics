import { Inter } from "next/font/google";
import "../globals.css";
import SideMenu from "@/components/DashBoard_Components/SideMenu_component/SideMenu";
import MainSection from "@/components/DashBoard_Components/MainContent_Component/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen grid grid-cols-[300px_1fr] bg-white">
          <SideMenu />
          <MainSection>
            <main className="flex-1 p-10 overflow-y-scroll">{children}</main>
          </MainSection>
        </div>
      </body>
    </html>
  );
}
