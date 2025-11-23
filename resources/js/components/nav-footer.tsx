import { Icon } from '@/components/icon';
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { useTheme } from '@/stores/useTheme';
import { type NavItemFooter } from '@/types';
import { Link } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-react';
import { type ComponentPropsWithoutRef } from 'react';

export function NavFooter({
    items,
    className,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarGroup> & {
    items: NavItemFooter[];
}) {
    const { theme, setTheme } = useTheme();

    return (
        <SidebarGroup {...props} className={`group-data-[collapsible=icon]:p-0 ${className || ''} bg-primary/5 rounded-lg`}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                            >
                                {item.linkType === 'internal' ? (
                                    <Link href={item.href} prefetch>
                                        {item.icon && <item.icon className="h-5 w-5" />}
                                        <span>{item.title}</span>
                                    </Link>
                                ) : (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                        <span>{item.title}</span>
                                    </a>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                        >
                            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                                <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
                            </button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
