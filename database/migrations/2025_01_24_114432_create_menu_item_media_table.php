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
        Schema::create('menu_section_item_media', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->tinyText('extention');
            $table->string('alt');
            $table->foreignId('menu_section_item_id')->unique()->constrained('menu_section_items','id')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_item_media');
    }
};
