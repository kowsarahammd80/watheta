import HomeFeatures from "@/components/HomeFeatures";
import HomeHero from "@/components/HomeHero";
import TrustedCustomers from "@/components/TrustedCustomers";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <HomeHero/>
        <TrustedCustomers/>
        <HomeFeatures/>
    </div>
  );
}
