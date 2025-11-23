import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Planner() {
    return (
        <AppLayout>
            <Head title="Planner" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Planner</h1>
                    <div className="flex gap-2">
                        <Button>New Plan</Button>
                        <Button variant="ghost">Import</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Savings Planner</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Input placeholder="Monthly savings (£)" />
                            <Input placeholder="Target date" />
                        </div>

                        <div className="mt-4">
                            <Button>Calculate</Button>
                        </div>

                        <div className="mt-4">
                            <Skeleton className="h-40" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment Planner</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-40" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
