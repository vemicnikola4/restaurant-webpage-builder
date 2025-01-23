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
        Schema::create('hero_media', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->tinyText('extention');
            $table->string('alt');
            $table->foreignId('hero_id')->unique()->constrained('heroes','id')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_media');
    }
};
