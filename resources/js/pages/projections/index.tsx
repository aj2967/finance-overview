import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Projections() {
    return (
        <AppLayout>
            <Head title="Projections" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Projections & Simulations</h1>
                    <div className="flex gap-2">
                        <Button>Run Projection</Button>
                        <Button variant="ghost">Save Scenario</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Net Worth Projection</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Input placeholder="Monthly contribution (£)" />
                            <Input placeholder="Expected annual return (%)" />
                            <Input placeholder="Inflation (%)" />
                        </div>
                        <div className="mt-4">
                            <Skeleton className="h-56" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Monte Carlo (sample)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
