import React from "react";
import TeamCard from "@/components/modules/TeamCard/TeamCard";
import Button from "@/components/modules/button/Button";
function Team() {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>

      <div className="w-full flex justify-end mt-7">
        <Button text={"View all"} />
      </div>
    </>
  );
}

export default Team;
