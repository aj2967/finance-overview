import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Crypto() {
    return (
        <AppLayout>
            <Head title="Crypto" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Crypto</h1>
                    <div className="flex gap-3">
                        <Button>Sync Wallets</Button>
                        <Button variant="ghost">Add Coin</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Portfolio Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$11,520</div>
                            <Skeleton className="mt-4 h-28" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>24h Change</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-medium">+3.8%</div>
                            <Skeleton className="mt-4 h-28" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Top Performer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-medium">SOL +12.5%</div>
                            <Skeleton className="mt-4 h-28" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Holdings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Coin</TableHead>
                                    <TableHead>Holdings</TableHead>
                                    <TableHead>Price (USD)</TableHead>
                                    <TableHead>Value (USD)</TableHead>
                                    <TableHead>24h</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Placeholder rows */}
                                <TableRow>
                                    <TableCell>BTC</TableCell>
                                    <TableCell>0.124</TableCell>
                                    <TableCell>$44,200</TableCell>
                                    <TableCell>$5,480</TableCell>
                                    <TableCell>+2.1%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>ETH</TableCell>
                                    <TableCell>1.30</TableCell>
                                    <TableCell>$3,200</TableCell>
                                    <TableCell>$4,160</TableCell>
                                    <TableCell>+1.9%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Market Movers</CardTitle>
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
            </div>
        </AppLayout>
    );
}
