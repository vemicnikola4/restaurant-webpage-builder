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
        Schema::create('menu_section_items', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('title');
            $table->text('description');
            $table->boolean('discounted')->default(false);
            $table->integer('discount')->nullable();
            $table->decimal('price', 8, 2);
            $table->string('menu_section_id'); // Foreign key referencing the users table

            // Foreign key constraint
            $table->foreign('menu_section_id')->references('id')->on('menu_sections')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_section_items');
    }
};
