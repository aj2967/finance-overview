<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_integrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('integration_id')->constrained('integrations_list', 'id');
            $table->string('access_token')->nullable();
            $table->string('refresh_token')->nullable();
            $table->tinyInteger('auto_sync')->default(1);
            $table->enum('sync_frequency', ['manual', 'hourly', 'daily', 'weekly'])->default('daily');
            $table->json('metadata')->nullable()->comment('Additional information about the integration');
            $table->json('credentials')->nullable();
            $table->dateTime('connected_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_integrations');
    }
};
