@extends('layouts.app')


@section('content')
	<hr>
		<h1 class="text-center">Update Employee</h1>
	<hr>
	<form action="{{ route('employee.update', $employee->id)}}" method="POST">
			{{ csrf_field() }}
			
		<div class="form-group col-md-6">
			<label for="name">Name: </label>
			<input type="text" name="name" value="{{$employee->name}}" class="form-control">		
		</div>
		
		<div class="form-group col-md-6">
			<label for="email">Email: </label>
			<input type="email" name="email" value="{{$employee->email}}" class="form-control">		
		</div>
		
		
		
		
		<div class="form-group col-md-6">
			<label for="address">Address: </label>
			<input type="text" name="address"  value= "{{ $employee->address}}" class="form-control">		
		</div>

		<div class="form-group col-lg-6">
			<label for="department">Select a Roll</label>
			<select name="role_id"  cols="5" rows="5" class="form-control">
				@if($roll)
				@foreach($roll as $roll)
					<option name = "role_id" value="{{$roll->id}}" 
						@if($roll->id == $employee['role_id']){{"selected"}}
					@endif>
					{{$roll->name}}
				</option>
				@endforeach
				@endif
			</select>
		</div>

		<div class="form-group col-lg-6">
			<label for="department">Select a Department</label>
			<select name="department_id"  cols="5" rows="5" class="form-control">
				@if($department)
				@foreach($department as $department)
					<option name = "department_id" value="{{$roll->id}}" 
						@if($department->id == $employee->department_id){{"selected"}}
					@endif>
					{{$department->name}}
				</option>
				@endforeach
				@endif
			</select>
		</div>

		

		<div class="form-group col-md-6">
			<label for="salary">Salary: </label>
			<input type="text" name="salary"  value= "{{ $employee->salary}}" class="form-control">		
		</div>
		
		<div class="text-center">
			<button class="btn btn-success" type="submit" >Update Changes</button>
		</div>
	</form>

@endsection