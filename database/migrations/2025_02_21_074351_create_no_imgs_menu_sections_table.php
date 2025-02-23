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
        Schema::create('no_imgs_menu_sections', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('title');
            $table->text('note');
            $table->integer('index');
            $table->foreignId('page_id')->constrained('pages','id')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('no_imgs_menu_sections');
    }
};
