<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->string('name',50);
            $table->string('description',255);
            $table->integer('price');
            $table->integer('promotion_price')->nullable(true);
            $table->integer('quantity');
            $table->boolean('status');
            $table->integer('view_count')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *php artisan make:model User --migration
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
