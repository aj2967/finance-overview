import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

type NavMainProps = {
    items: NavItem[];
};

export function NavMain({ items }: NavMainProps) {
    const page = usePage();
    const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

    // Get unique sections in order of appearance
    const sections = Array.from(new Set(items.map((i) => i.section || 'Other')));

    const toggleSection = (section: string) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            {sections.map((section) => {
                const sectionItems = items.filter((i) => (i.section || 'Other') === section);
                const isCollapsed = collapsedSections[section] ?? false;

                return (
                    <SidebarGroup key={section} className="px-2 py-0">
                        <SidebarGroupLabel
                            className="flex cursor-pointer items-center justify-between select-none"
                            onClick={() => toggleSection(section)}
                        >
                            <span>{section}</span>
                            <span>{isCollapsed ? '▶' : '▼'}</span>
                        </SidebarGroupLabel>

                        {!isCollapsed && (
                            <SidebarMenu>
                                {sectionItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.href === page.url} tooltip={{ children: item.title }}>
                                            <Link href={item.href} prefetch>
                                                {item.icon && <item.icon className="mr-2" />}
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        )}
                    </SidebarGroup>
                );
            })}
        </>
    );
}

// import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
// import { type NavItem } from '@/types';
// import { Link, usePage } from '@inertiajs/react';

// export function NavMain({ items = [] }: { items: NavItem[] }) {
//     const page = usePage();
//     return (
//         <SidebarGroup className="px-2 py-0">
//             <SidebarGroupLabel>
//                 Platform
//             </SidebarGroupLabel>
//             <SidebarMenu>
//                 {items.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                         <SidebarMenuButton
//                             asChild isActive={item.href === page.url}
//                             tooltip={{ children: item.title }}
//                         >
//                             <Link href={item.href} prefetch>
//                                 {item.icon && <item.icon />}
//                                 <span>{item.title}</span>
//                             </Link>
//                         </SidebarMenuButton>
//                     </SidebarMenuItem>
//                 ))}
//             </SidebarMenu>
//         </SidebarGroup>
//     );
// }
