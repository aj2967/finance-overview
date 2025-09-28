import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
];

// export default function Dashboard() {
//   return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//         <Head title="Dashboard" />

//           <div className="min-h-screen bg-background text-foreground">

//             {/* Main Content */}
//             <main className="flex-1 space-y-6 p-6">
//             {/* Summary Cards */}
//             <div className="grid grid-cols-3 gap-6">
//                 <SummaryCard
//                 icon={
//                     <svg className="w-6 h-6" viewBox="0 0 24 24">
//                     <path
//                         fill="currentColor"
//                         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
//                     />
//                     </svg>
//                 }
//                 title="Total Assets"
//                 value="$542,300"
//                 />
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-2 gap-6">
//                 {/* Net Worth Trend */}
//                 <div className="bg-card p-6 rounded-[var(--radius)] border border-border">
//                 <h3 className="font-semibold mb-4">Net Worth Trend</h3>
//                 <svg className="w-full h-64" viewBox="0 0 500 200">
//                     <polyline
//                     fill="none"
//                     stroke="var(--chart-1)"
//                     strokeWidth="3"
//                     points="0,180 50,150 100,160 150,120 200,140 250,100 300,80 350,110 400,90 450,60 500,30"
//                     />
//                 </svg>
//                 </div>

//                 {/* Asset Allocation */}
//                 <div className="bg-card p-6 rounded-[var(--radius)] border border-border">
//                 <h3 className="font-semibold mb-4">Asset Allocation</h3>
//                 <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="45" fill="none" stroke="var(--chart-2)" strokeWidth="10" strokeDasharray="141.37 70.685" />
//                 </svg>
//                 </div>
//             </div>

//             {/* Recent Transactions */}
//             <div className="bg-card p-6 rounded-[var(--radius)] border border-border">
//                 <h3 className="font-semibold mb-4">Recent Transactions</h3>
//                 <div className="space-y-3">
//                 <TransactionItem
//                     title="AAPL Purchase"
//                     amount="+$15,000"
//                     date="Today 09:30"
//                     color="text-success"
//                 />
//                 </div>
//             </div>
//             </main>
//         </div>

//         </AppLayout>
//   );
// }

// // Reusable Components
// function SummaryCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
//   return (
//     <div className="bg-card p-6 rounded-[var(--radius)] border border-border">
//       <div className="flex items-center gap-4">
//         <div className="bg-primary/20 p-2 rounded-full">{icon}</div>
//         <div>
//           <p className="text-muted-foreground text-sm">{title}</p>
//           <p className="text-2xl font-bold">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TransactionItem({ title, amount, date, color }: { title: string; amount: string; date: string; color: string }) {
//   return (
//     <div className="flex items-center justify-between p-3 hover:bg-muted rounded">
//       <div>
//         <p className="font-medium">{title}</p>
//         <p className="text-sm text-muted-foreground">{date}</p>
//       </div>
//       <span className={`${color} font-medium`}>{amount}</span>
//     </div>
//   );
// }

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
