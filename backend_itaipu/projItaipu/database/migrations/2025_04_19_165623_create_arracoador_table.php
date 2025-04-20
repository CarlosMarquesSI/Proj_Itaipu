<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArracoadorTable extends Migration
{
    public function up()
    {
        Schema::create('arracoador', function (Blueprint $table) {
            $table->id('id_arracoador');
            $table->string('ip', 32);
            $table->tinyInteger('qualidadeagua');
            $table->tinyInteger('temperatura');
            $table->tinyInteger('ph');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('arracoador');
    }
}
