import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Transactions() {
    return (
        <AppLayout>
            <Head title="Transactions" />

            <Card>
                <CardHeader>
                    <CardTitle>All Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex gap-4">
                        <Input placeholder="Search transactions..." className="max-w-xs" />
                        <Skeleton className="h-10 w-32" /> {/* Filter dropdown placeholder */}
                    </div>

                    <Skeleton className="h-64" />
                </CardContent>
            </Card>
        </AppLayout>
    );
}
