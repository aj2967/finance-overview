import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Investments() {
    return (
        <AppLayout>
            <Head title="Investments" />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Trading212 Stocks ISA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">£42,300</div>
                        <Skeleton className="mt-4 h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Trading212 Invest</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">£6,100</div>
                        <Skeleton className="mt-4 h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Crypto Wallets</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$11,500</div>
                        <Skeleton className="mt-4 h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Investment Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
