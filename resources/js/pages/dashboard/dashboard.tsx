// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import BankCard from '@/components/cards/bank-card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Integrations" />
            <div className="bg-card flex h-full w-full justify-end gap-4 rounded-xl p-4">
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3"> */}

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-4">
                        <BankCard brand="hsbc" last4="1234" cardholder="AJ Singh" />
                        <BankCard brand="nationwide" last4="5678" cardholder="AJ Singh" />
                        <BankCard brand="natwest" last4="4321" />
                        <BankCard brand="revolut" last4="9876" />
                        <BankCard brand="starling" last4="2468" />
                        <BankCard brand="monzo-debit" last4="1357" />
                        <BankCard brand="monzo-flex" last4="2468" />
                        <BankCard brand="barclaycard-avios" last4="7777" />
                        <BankCard brand="hsbc-credit" last4="9999" />
                        <BankCard brand="amex-everyday" last4="0001" />
                        <BankCard brand="amex-gold" last4="1112" />
                    </div>
                </div>

                {/* </div> */}
            </div>
        </AppLayout>
    );
}
