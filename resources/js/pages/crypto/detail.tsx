import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

type Props = { symbol?: string };

export default function CryptoDetail({ symbol = 'BTC' }: Props) {
    symbol = symbol?.toUpperCase();
    return (
        <AppLayout>
            <Head title={`${symbol} — Crypto`} />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">{symbol} - Bitcoin</h1>
                        <p className="text-muted-foreground text-sm">Current holdings & market data</p>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline">Add Alert</Button>
                        <Button>Buy / Transfer</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Price</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">$44,200</div>
                            <div className="text-muted-foreground mt-1 text-sm">24h: +2.1%</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Wallet Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-28" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Break-even / P&L</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-28" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Price Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-64" />
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-48" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>On-chain Info / Notes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-48" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
