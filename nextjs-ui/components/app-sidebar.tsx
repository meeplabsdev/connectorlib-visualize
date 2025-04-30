"use client";

import type * as React from "react";
import {
	IconDirections,
	IconChartPie,
	IconMap,
	IconCurrentLocation,
	IconUser,
	IconServer,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavServer } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	server: {
		name: "Arlie Server",
		address: "mc.axo.llc",
		avatar: "/avatars/shadcn.jpg",
	},
	navTop: [
		{
			title: "Dashboard",
			url: "/",
			icon: IconChartPie,
		},
		{
			title: "World Map",
			url: "/map",
			icon: IconMap,
		},
		{
			title: "Hotspots",
			url: "/hotspots",
			icon: IconCurrentLocation,
		},
		{
			title: "Player Analytics",
			url: "/players",
			icon: IconUser,
		},
		{
			title: "Server Uptime",
			url: "/analytics",
			icon: IconServer,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5 hover:!bg-sidebar"
						>
							<span>
								<IconDirections className="!size-8" />
								<span className="text-lg font-semibold">TrackScout</span>
							</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navTop} />
			</SidebarContent>
			<SidebarFooter>
				<NavServer server={data.server} />
			</SidebarFooter>
		</Sidebar>
	);
}
