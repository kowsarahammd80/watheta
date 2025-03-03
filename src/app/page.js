import Conversational from "@/components/Conversational";
import HappyClientSays from "@/components/HappyClientSays";
import HomeBlogs from "@/components/HomeBlogs";
import HomeBroadcaster from "@/components/HomeBroadcaster";
import HomeConnectors from "@/components/HomeConnectors";
import HomeCrm from "@/components/HomeCrm";
import HomeDrip from "@/components/HomeDrip";
import HomeFeatures from "@/components/HomeFeatures";
import HomeGenerativeAI from "@/components/HomeGenerativeAI";
import HomeHero from "@/components/HomeHero";
import HomeIntegrations from "@/components/HomeIntegrations";
import ResonToSwitch from "@/components/ResonToSwitch";
import Teambox from "@/components/Teambox";
import TrustedCustomers from "@/components/TrustedCustomers";
import WhatsAppChatBots from "@/components/WhatsAppChatBots";
import WhtasAppCommerce from "@/components/WhtasAppCommerce";
import WhyChooseWaTheta from "@/components/WhyChooseWaTheta";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <HomeHero/>
        <TrustedCustomers/>
        <HomeFeatures/>
        <WhatsAppChatBots/>
        <HomeCrm/>
        <Teambox/>
        <WhtasAppCommerce/>
        <HomeBroadcaster/>
        <HomeDrip/>
        <HomeConnectors/>
        <HomeGenerativeAI/>
        <HappyClientSays/>
        <WhyChooseWaTheta/>
        <HomeIntegrations/>
        <Conversational/>
        <ResonToSwitch/>
        <HomeBlogs/>
    </div>
  );
}
