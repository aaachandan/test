import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientsContent from "./ClientsContent";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Meet our happy clients - leading brands that trust NexGen Digital for their digital needs.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main>
        <ClientsContent />
      </main>
      <Footer />
    </>
  );
}
