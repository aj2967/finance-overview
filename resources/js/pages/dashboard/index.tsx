import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Net Worth Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Net Worth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">£124,200</div>
                        <Skeleton className="mt-4 h-24" />
                    </CardContent>
                </Card>

                {/* Total Investments */}
                <Card>
                    <CardHeader>
                        <CardTitle>Total Investments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">£68,400</div>
                        <Skeleton className="mt-4 h-24" />
                    </CardContent>
                </Card>

                {/* Cash Balance */}
                <Card>
                    <CardHeader>
                        <CardTitle>Cash Accounts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">£12,840</div>
                        <Skeleton className="mt-4 h-24" />
                    </CardContent>
                </Card>
            </div>

            {/* Chart Row */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Net Worth Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-64" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Asset Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-64" />
                    </CardContent>
                </Card>
            </div>

            {/* Upcoming */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Targets & Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
