<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArracoadorUsuarioTable extends Migration
{
    public function up()
    {
        Schema::create('arracoador_usuario', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 45);
            $table->unsignedBigInteger('fk_arracoador');
            $table->unsignedBigInteger('fk_usuario');
            $table->timestamps();

            $table->foreign('fk_arracoador')->references('id_arracoador')->on('arracoador')->onDelete('cascade');
            $table->foreign('fk_usuario')->references('id_usuario')->on('usuario')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('arracoador_usuario');
    }
}
