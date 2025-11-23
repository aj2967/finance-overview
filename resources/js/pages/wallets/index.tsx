import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Wallets() {
    const wallets = [
        { name: 'Revolut — GBP', balance: 1400 },
        { name: 'Monzo — GBP', balance: 850 },
        { name: 'PayPal — USD', balance: 420 },
        { name: 'HSBC — Current', balance: 3200 },
    ];

    return (
        <AppLayout>
            <Head title="Wallets & Cards" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Cards & Wallets</h1>
                    <Button>Add Card / Wallet</Button>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {wallets.map((w) => (
                        <Card key={w.name}>
                            <CardHeader>
                                <CardTitle>{w.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-bold">£{w.balance}</div>
                                <Skeleton className="mt-3 h-20" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Recently Used Cards</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-40" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
