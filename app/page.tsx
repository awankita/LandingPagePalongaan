
import Header from "@/app/components/layout/Header";
import HeroSection from "@/app/components/hero/HeroSection";
import TentangSection from "@/app/components/tentang/TentangSection";
import AgendaSection from "@/app/components/agenda/AgendaSection";
import PetaSection from "@/app/components/peta/PetaSection";
import CCTVSection from "@/app/components/cctv/CCTVSection";
import Footer from "@/app/components/layout/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <TentangSection />
                <AgendaSection />
                <PetaSection />
                <CCTVSection />
            </main>
            <Footer />
        </>
    );
}
