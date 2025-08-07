import { Sidebar } from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-row h-screen">
      <Sidebar />
      <main className="container mx-auto max-w-full h-full">
        {children}
      </main>
    </div>
  );
}
