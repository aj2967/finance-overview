<?php

namespace App\Models\Integrations;

use App\Models\User;
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
        'access_token',
        'refresh_token',
        'auto_sync',
        'sync_frequency',
        'metadata',
        'credentials',
        'connected_at',
    ];
    protected $casts = [
        // 'credentials' => 'encrypted:array',
        'credentials' => 'json',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function integration()
    {
        return $this->belongsTo(IntegrationsList::class, 'integration_id');
    }
}
