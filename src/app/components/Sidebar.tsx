"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: "Home", path: "/dashboard/home" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname(); // Get current URL path

    return (
        <div className="w-1/5 bg-gray-900 text-white p-4 flex flex-col h-screen">
            {menuItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={`p-3 mb-2 rounded 
                    ${pathname === item.path ?
                            "bg-gray-600" : "bg-gray-700 hover:bg-gray-600"}`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
