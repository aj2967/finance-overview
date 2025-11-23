import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Budgets() {
    return (
        <AppLayout>
            <Head title="Budgets" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Budgets</h1>
                    <Button>Create Budget</Button>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Monthly Budget Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-48" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-48" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Spending Alerts & Rules</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-40" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
