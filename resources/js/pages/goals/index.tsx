import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Goals() {
    return (
        <AppLayout>
            <Head title="Goals" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Goals</h1>
                    <Button>Create Goal</Button>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Emergency Fund</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-bold">£6,000 / £10,000</div>
                            <div className="mt-3">
                                <Skeleton className="h-4" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>House Deposit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-bold">£12,400 / £30,000</div>
                            <div className="mt-3">
                                <Skeleton className="h-4" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Holiday 2026</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-bold">£800 / £2,500</div>
                            <div className="mt-3">
                                <Skeleton className="h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Forecasted Goal Completion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
