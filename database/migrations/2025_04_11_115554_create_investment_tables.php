<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('investment_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            // Add user_integration_id to link to UserIntegrations table
            $table->string('provider')->comment('Specific investment account of an integration. Trading212 example - S&S ISA, Cash ISA, CFD, etc.');
            $table->string('name');
            $table->enum('type', ['stock', 'crypto', 'pension', 'trading']);
            $table->string('currency')->nullable();
            $table->boolean('is_manual')->nullable()->default(0);
            $table->timestamps();
        });

        Schema::create('investment_holdings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('investmet_account_id')->constrained('investment_accounts', 'id');
            $table->enum('type', ['stock', 'crypto'])->comment('Type of holding');
            $table->string('symbol')->comment('The symbol of the asset, e.g., AAPL, BTC')->nullable();
            $table->string('name')->comment('The name of the asset, e.g., Apple, Bitcoin');
            $table->decimal('quantity', 20, 8)->default(0)->comment('The amount of the asset owned');
            $table->decimal('average_price', 10, 2)->default(0)->comment('Price of asset when purchased');
            $table->decimal('current_price', 10, 2)->default(0)->comment('Current price of the asset, fetched from an API periodically.');
            $table->decimal('market_value', 10, 2)->default(0)->comment('quantity * current_price');
            $table->dateTime('acquired_at')->nullable()->comment('The date when the asset was acquired');
            $table->timestamps();
        });

        Schema::create('currency_exchange_rates', function (Blueprint $table) {
            $table->id();
            $table->string('currency', 3)->nullable()->default(0);
            $table->decimal('rate', 18, 8)->nullable()->default(0);
            $table->timestamps();
        });

        Schema::create('investment_performance', function (Blueprint $table) {
            $table->id();
            $table->foreignId('holding_id')->constrained('investment_holdings', 'id');
            $table->decimal('gain_loss_abs', 8, 2)->default(0);
            $table->decimal('gain_loss_pct', 8, 2)->default(0);
            $table->string('return_period', 25)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investment_accounts');
        Schema::dropIfExists('investment_holdings');
        Schema::dropIfExists('currency_exchange_rates');
        Schema::dropIfExists('investment_performance');
    }
};
