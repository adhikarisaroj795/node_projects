@extends('layouts.app')


@section('content')
            <h1>Employee Name: {{$employee->name}}</h1>
			<h1>Role: {{$employee->role->name??null}}</h1>
			<h2>Salary: {{$employee->salary}}</h2>
            <hr>
    <br><br><br>
	<table class= "table table-hover">
		<thead>
			<th>Employee</th>
			<th>Email</th>
			<th>Address</th>
			<th>Role</th>
			<th>Department</th>
			<th>Salary</th>
		</thead>
		<tbody>
			@if($employee)
				<tr>
					<td>{{$employee->name}}</td>
					<td>{{$employee->email}}</td>
					<td>{{$employee->address}}</td>
					<td>{{$employee->role->name}}</td>
					<td>{{$employee->department->name??null}}</td>
					<td>{{$employee->salary}}</td>

				</tr>
			@endif
		</tbody>	
	</table>
		
@endsection