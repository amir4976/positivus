import React from "react";
import ServicesCard from "@/components/modules/ServicesCard/ServicesCard";
function Services() {
  return (
    <div className="w-full h-fit grid grid-cols-1 gap-10 px-5 my-5 md:grid-cols-2 ">
      <ServicesCard
        color="text-DarkDef"
        title="Search engine optimization Learn more"
        background="bg-whiteDef"
        textBg="bg-greenDef"
        cover="/Illustration (2).png"
      />
      <ServicesCard
        color="text-DarkDef"
        title="Pay-per-click advertising "
        background="bg-greenDef"
        textBg="bg-whiteDef"
        cover="/Illustration (1).png"
      />
      <ServicesCard
        color="text-whiteDef"
        title="Social media marketing"
        background="bg-DarkDef"
        textBg="bg-whiteDef"
        cover="/Illustration (3).png"
      />
      <ServicesCard
        color="text-DarkDef"
        title="email marketing"
        background="bg-whiteDef"
        textBg="bg-greenDef"
        cover="/tokyo-sending-messages-from-one-place-to-another 1.png"
      />
      <ServicesCard
        color="text-DarkDef"
        title="Content Creation "
        background="bg-greenDef"
        textBg="bg-whiteDef"
        cover="/Illustration (4).png"
      />
          <ServicesCard
        color="text-whiteDef"
        title="Analytics and Tracking"
        background="bg-DarkDef"
        textBg="bg-whiteDef"
        cover="/Illustration (5).png"
      />
    </div>
  );
}

export default Services;
