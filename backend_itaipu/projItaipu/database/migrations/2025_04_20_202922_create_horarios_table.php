<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorariosTable extends Migration
{
    public function up()
    {
        Schema::create('horarios', function (Blueprint $table) {
            $table->id('id_horario');
            $table->time('hora');
            $table->mediumInteger('gramas');
            $table->tinyInteger('tiporacao');
            $table->unsignedBigInteger('fk_arracoador');
            $table->timestamps();

            $table->foreign('fk_arracoador')->references('id_arracoador')->on('arracoador')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('horarios');
    }
}
