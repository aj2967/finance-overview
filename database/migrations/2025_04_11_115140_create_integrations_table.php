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
        Schema::create('integrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['bank', 'investment']);
            $table->string('provider')->comment('The name of the provider, e.g., TrueLayer, HSBC, Binance, Trading212');
            $table->string('name');
            $table->string('access_token')->nullable();
            $table->string('refresh_token')->nullable();
            $table->json('metadata')->nullable()->comment('Additional information about the integration');
            $table->dateTime('connected_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('integrations');
    }
};
