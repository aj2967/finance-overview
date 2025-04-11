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
        Schema::create('user_net_worth_snapshot', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->decimal('total_assets', 8, 2)->nullable()->default(0);
            $table->decimal('total_liabilities', 8, 2)->nullable()->default(0);
            $table->decimal('net_worth', 8, 2)->nullable()->default(0);
            $table->dateTime('calculated_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_net_worth_snapshot');
    }
};
