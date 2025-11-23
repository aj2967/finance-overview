import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Accounts() {
    const accounts = [
        { bank: 'HSBC UK', type: 'Current Account', balance: 3200 },
        { bank: 'Monzo', type: 'Joint Account', balance: 850 },
        { bank: 'Revolut', type: 'USD Wallet', balance: 1400 },
        { bank: 'Nationwide', type: 'Credit Card', balance: -600 },
    ];

    return (
        <AppLayout>
            <Head title="Accounts" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {accounts.map((a) => (
                    <Card key={a.bank}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{a.bank}</CardTitle>
                                <Badge variant="outline">{a.type}</Badge>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <p className="text-2xl font-bold">£{a.balance}</p>
                            <Skeleton className="mt-4 h-24" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
