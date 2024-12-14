import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="w-full">
        <div className="grid md:hidden">
          <SidebarTrigger />
        </div>
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
