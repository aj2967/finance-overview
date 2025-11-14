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
        Schema::create('integrations_list', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['active', 'inactive'])->default('inactive');
            $table->string('name')->unique()->comment('The name of the provider, e.g., TrueLayer, HSBC, Binance, Trading212');
            $table->string('url')->unique();
            $table->string('description')->nullable();
            $table->string('icon')->nullable();
            $table->enum('category', ['general', 'bank', 'stocks', 'crypto', 'property'])->default('general');
            $table->json('tags')->nullable()->comment('Tags or keywords for filtering or searching integrations');
            $table->tinyInteger('is_featured')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('integrations_list');
    }
};
