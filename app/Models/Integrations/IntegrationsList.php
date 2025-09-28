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
    public $casts = ['tags' => 'json'];
}
