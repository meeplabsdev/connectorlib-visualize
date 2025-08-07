import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import { useParams } from 'react-router-dom';
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { UserSelect } from "./userselect";

export const Sidebar = () => {
  const params = useParams();
  let server = params["*"] || "";

  return (
    <div className="h-full w-72 flex flex-col border-r-small border-divider p-6">
      <div>
        <div className="flex flex-row w-full">
          <div className="gap-3 max-w-fit">
            <Link
              className="flex justify-start items-center gap-1"
              color="foreground"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">Scout</p>
            </Link>
          </div>
          <div className="grow" />
          <ThemeSwitch />
        </div>
      </div>
      <Divider className="my-4" />
      <Listbox
        key={server}
        variant="flat"
        selectionMode="single"
        selectedKeys={new Set([server])}
        itemClasses={{
          selectedIcon: "hidden",
        }}
      >
        <ListboxSection tabIndex={0} title="" className="p-0 m-0 hidden">
          <ListboxItem key="0" className="p-0 m-0 hidden" />
        </ListboxSection>
        <ListboxSection title="Your Servers">
          {siteConfig.servers.map((item) => (
            <ListboxItem
              key={item.addr}
              className="p-0 data-[selected=true]:bg-default/40 data-[selected=true]:text-default-foreground"
            >
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[hover=true]:text-default-foreground font-normal w-full h-full px-2 py-1.5 text-small",
                )}
                color="foreground"
                href={"/server/" + item.addr}
              >
                <div className="flex flex-col truncate">
                  {item.label}
                  <span className="text-tiny text-foreground-500 truncate">
                    {item.addr}
                  </span>
                </div>
              </Link>
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
      <div className="grow" />
      <div className="w-full">
        <UserSelect />
      </div>
    </div>
  );
};
