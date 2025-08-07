import { User } from "@heroui/user";
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, DropdownSection } from "@heroui/dropdown";
import { LogoutIcon } from "./icons";
import { Button } from "@heroui/button";

export const UserSelect = () => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="light" className="px-2 py-1.5 m-0 w-full h-full" disableAnimation>
          <div className="flex flex-row w-full">
            <User
              avatarProps={{
                src: "https://ui-avatars.com/api/?name=Administrator&background=random",
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description="Administrator"
              name="Admin"
            />
            <div className="grow" />
            <LogoutIcon className="self-center" />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        className="p-3"
        disabledKeys={["profile"]}
        itemClasses={{
          base: [
            "text-default-500",
            "transition-opacity",
          ],
        }}
      >
        <DropdownSection showDivider>
          <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100">
            <User
              avatarProps={{
                size: "sm",
                src: "https://ui-avatars.com/api/?name=Administrator&background=random",
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description="Administrator"
              name="Admin"
            />
          </DropdownItem>
          {/* <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem> */}
        </DropdownSection>
        <DropdownItem key="logout" className="text-danger" color="danger">Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
