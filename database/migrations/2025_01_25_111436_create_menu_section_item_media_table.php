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
            $table->string('menu_section_item_id'); // Foreign key referencing the users table

            // Foreign key constraint
            $table->foreign('menu_section_item_id')->references('id')->on('menu_section_items')->onDelete('cascade')->onUpdate('cascade')->unique();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_section_item_media');
    }
};
