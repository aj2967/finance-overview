import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItemFooter, type NavItemSection } from '@/types';
import { Link } from '@inertiajs/react';
import { Activity, BarChart, Bell, Bitcoin, BookOpen, Calculator, Calendar, CreditCard, DollarSign, FileText, LayoutGrid, PieChart, Repeat, Target, TrendingUp, Unplug, Wallet } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItemSection[] = [
    // Primary Dashboard
    {
        title: 'Dashboard',
        href: '/',
        icon: LayoutGrid,
        section: 'Platform',
    },

    // Accounts & wallets
    {
        title: 'Accounts',
        href: '/accounts',
        icon: CreditCard,
        section: 'Accounts',
    },
    {
        title: 'Wallets',
        href: '/wallets',
        icon: Wallet,
        section: 'Accounts',
    },
    {
        title: 'Transactions',
        href: '/transactions',
        icon: Repeat,
        section: 'Accounts',
    },

    // Investments
    {
        title: 'Investments',
        href: '/investments',
        icon: TrendingUp,
        section: 'Investments',
    },
    {
        title: 'Crypto',
        href: '/crypto',
        icon: Bitcoin,
        section: 'Investments',
    },
    {
        title: 'Coin',
        href: '/crypto/btc',
        icon: Bitcoin,
        section: 'Investments',
    },
    {
        title: 'Net Worth',
        href: '/networth',
        icon: DollarSign,
        section: 'Investments',
    },
    {
        title: 'Projections',
        href: '/projections',
        icon: Activity,
        section: 'Investments',
    },
    {
        title: 'Calculators',
        href: '/calculators',
        icon: Calculator,
        section: 'Investments',
    },

    // Personal finance & planning
    {
        title: 'Goals',
        href: '/goals',
        icon: Target,
        section: 'Planning',
    },
    {
        title: 'Budgets',
        href: '/budgets',
        icon: PieChart,
        section: 'Planning',
    },
    {
        title: 'Planner',
        href: '/planner',
        icon: Calendar,
        section: 'Planning',
    },

    // Analytics & insights
    {
        title: 'Insights',
        href: '/insights',
        icon: BarChart,
        section: 'Analytics',
    },
    {
        title: 'Reports',
        href: '/reports',
        icon: FileText,
        section: 'Analytics',
    },

    // Notifications / Settings
    {
        title: 'Notifications',
        href: '/notifications',
        icon: Bell,
        section: 'System',
    },
];

const footerNavItems: NavItemFooter[] = [
    {
        title: 'Integrations',
        href: '/integrations/',
        icon: Unplug,
        linkType: 'internal',
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/12.x',
        icon: BookOpen,
        linkType: 'external',
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
