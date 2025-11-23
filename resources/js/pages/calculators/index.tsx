import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function WhatIf() {
    return (
        <AppLayout>
            <Head title="What If?" />

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-semibold">What If? Scenario Planner</h1>

                <Card>
                    <CardHeader>
                        <CardTitle>Scenario Inputs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Input placeholder="Extra monthly investment (£)" />
                            <Input placeholder="Asset reallocation % to stocks" />
                            <Input placeholder="Time horizon (years)" />
                            <Input placeholder="Expected return (%)" />
                        </div>
                        <div className="mt-4 flex gap-2">
                            <Button>Simulate</Button>
                            <Button variant="outline">Reset</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Scenario Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
