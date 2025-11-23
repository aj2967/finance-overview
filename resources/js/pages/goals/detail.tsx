import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

type Props = { slug?: string };

export default function GoalDetail({ slug = 'emergency-fund' }: Props) {
    console.log(slug)
    return (
        <AppLayout>
            <Head title="Goal — Details" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Emergency Fund</h1>
                        <p className="text-muted-foreground text-sm">Target: £10,000</p>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline">Edit</Button>
                        <Button>Contribute</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xl font-bold">£6,000 / £10,000</div>
                        <Skeleton className="mt-4 h-24" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Contribution History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Forecast</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
