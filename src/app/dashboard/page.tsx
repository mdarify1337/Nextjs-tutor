import { redirect } from "next/navigation";

export default function Dashboard() {
  redirect("/dashboard/home");
}
/*

"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

import HomeComponent from "@/components/HomeComponent";
import ProfileComponent from "@/components/ProfileComponent";
import SettingsComponent from "@/components/SettingsComponent";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("HomeComponent");

  const renderComponent = () => {
    switch (activeComponent) {
      case "ProfileComponent":
        return <ProfileComponent />;
      case "SettingsComponent":
        return <SettingsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div className="flex w-full h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 p-6">{renderComponent()}</div>
    </div>
  );
}

*/