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
        Schema::create('user_property_assets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('address')->nullable();
            $table->decimal('estimated_value', 8, 2)->nullable()->default(0);
            $table->decimal('mortgage_balance', 8, 2)->nullable()->default(0);
            $table->enum('value_source', ['manual', 'suggested'])->nullable();
            $table->dateTime('last_valued_at')->nullable();
            $table->string('source');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_property_assets');
    }
};
