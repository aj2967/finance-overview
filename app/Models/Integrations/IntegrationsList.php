<?php

namespace App\Models\Integrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntegrationsList extends Model
{
    /** @use HasFactory<\Database\Factories\IntegrationsListFactory> */
    use HasFactory;

    protected $table = 'integrations_list';
    public $timestamps = true;
    public $casts = ['tags' => 'array'];
    public $fillable = [
        'status',
        'name',
        'url',
        'description',
        'icon',
        'category',
        'tags',
        'is_featured',
    ];

    public function activeUserIntegrations()
    {
        return $this->hasOne(UserIntegrations::class, 'integration_id');
    }
}
