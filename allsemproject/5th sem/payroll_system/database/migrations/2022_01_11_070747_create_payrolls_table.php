<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayrollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payrolls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('Employee_id')->nullable()->constrained('employees', 'id')->cascadeOnUpdate()->nullOnDelete();
            $table->string('salary');
            // $table->foreignId('role_id')->nullable()->constrained('rolls', 'id')->cascadeOnUpdate()->nullOnDelete();
            $table->string('over_time');
            $table->string('hours')->default(0);
            $table->string('rate')->default(0);
            $table->string('gross');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payrolls');
    }
}
