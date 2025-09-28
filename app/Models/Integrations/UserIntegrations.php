<?php

namespace App\Models\Integrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserIntegrations extends Model
{
    /** @use HasFactory<\Database\Factories\IntegrationsListFactory> */
    // use HasFactory;

    protected $table = 'user_integrations';

    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'integration_id',
        'type',
        'provider',
        'name',
        'api_key',
        'refresh_token',
        'access_token',
        'auto_sync',
        'sync_frequency',
        'metadata',
        'connected_at',
    ];
}
