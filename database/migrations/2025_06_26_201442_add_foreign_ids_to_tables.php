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
        Schema::table('user_integrations', function (Blueprint $table) {
            $table->foreignId('integration_id')->constrained('integrations_list', 'id');
        });

        Schema::table('investment_accounts', function (Blueprint $table) {
            $table->foreignId('integration_id')->constrained('integrations_list', 'id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_integrations', function (Blueprint $table) {
            $table->dropForeign(['integration_id']);
            $table->dropColumn('integration_id');
        });
        Schema::table('investment_accounts', function (Blueprint $table) {
            $table->dropForeign(['integration_id']);
            $table->dropColumn('integration_id');
        });
    }
};
