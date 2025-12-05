"use client";

import { CanAccess, ITreeMenu, useMenu } from "@refinedev/core";
import { cn } from "../src/lib/utils";
import { Link } from "./link";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export function NavRefine() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item, key) => {
      const { list, meta } = item;
      const isSelected = item.key === selectedKey;
      return (
        <CanAccess key={key} resource={item.name} action="list">
          <Collapsible
            key={key}
            asChild
            defaultOpen={isSelected}
            className="group/collapsible"
          >
            <SidebarMenuItem key={item.key}>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  asChild
                  className={cn("flex items-center", isSelected && "bg-accent")}
                >
                  <Link
                    key={key}
                    href={list?.toString() ?? "#"}
                    title={meta?.label ?? item.name}
                  >
                    {meta?.icon}
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        </CanAccess>
      );
    });
  };

  // Group items by meta.group
  const groups: { [key: string]: ITreeMenu[] } = {};
  menuItems.forEach((item) => {
    const group = item.meta?.group || "otros";
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  });

  const groupLabels: { [key: string]: string } = {
    dashboard: "Dashboard",
    principales: "Principales",
    payments: "Pagos",
    app: "Aplicación",
    otros: "Otros",
    users: "Usuarios",
  };

  return (
    <div className="mb-10">
      {Object.entries(groups).map(([group, items]) => (
        <SidebarGroup key={group}>
          <SidebarGroupLabel>{groupLabels[group] || group}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderTreeView(items, selectedKey)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </div>
  );
}