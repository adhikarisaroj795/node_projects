<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Models\Payroll;
use App\Models\Roll;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        $rolls = Roll::all();
        $departments = Department::all();
        $payrolls = Payroll::all();
        return view('dashboard', compact('employees','departments', 'rolls', 'payrolls'));
    }
}
