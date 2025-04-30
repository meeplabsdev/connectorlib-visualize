"use client";

import type { Icon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: Icon;
	}[];
}) {
	const location = usePathname();

	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-3">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								tooltip={item.title}
								isActive={location.endsWith(item.url)}
								onClick={() => {
									window.location.href = item.url;
								}}
							>
								{item.icon && <item.icon />}
								<span className="text-sm">{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
