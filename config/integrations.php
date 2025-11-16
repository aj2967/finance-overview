<?php

return [
    'drivers' => [
        'trading212' => [
            'driver' => \App\Services\Integrations\Drivers\Trading212Driver::class,
            'auth_type' => 'client_secret', // client_secret | oauth2 | api_key
            'fields' => ['client_id', 'client_secret'],
            'sync' => [
                'class' => \App\Services\Integrations\Drivers\Trading212Driver::class,
            ],
        ],
        // 'openbanking_bank_x' => [
        //     'driver' => \App\Services\Integrations\Drivers\OpenBankingDriver::class,
        //     'auth_type' => 'oauth2',
        //     'fields' => ['client_id', 'client_secret', 'redirect_uri'],
        // ],
        // 'simple_api' => [
        //     'driver' => \App\Services\Integrations\Drivers\ApiKeyDriver::class,
        //     'auth_type' => 'api_key',
        //     'fields' => ['api_key'],
        // ],
    ],
];
