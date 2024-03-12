@extends('layouts.app')


@section('content')
	<div class="col-lg-12">
		<h1 class="page-header">New Employee</h1>
	</div>
	
	<form action="{{ route('employee.store') }}" method="POST">
			{{ csrf_field() }}
		
		<div class="form-group col-md-6">
			<label for="name">Name: </label>
			<input type="text" name="name" class="form-control">		
		</div>
		
		<div class="form-group col-md-6">
			<label for="email">Email: </label>
			<input type="email" name="email" class="form-control">		
		</div>
		
		<div class="form-group col-md-6">
			<label for="address">Address: </label>
			<input type="text" name="address" class="form-control">		
		</div>		
				
		<div class="form-group col-md-6">
			<label for="role">Select a Role</label>
			<select name="role_id"  cols="5" rows="5" class="form-control">
				@foreach($roll as $roll)
					<option value="{{ $roll->id }}">{{ $roll->name }}</option>
				@endforeach
			</select>
		</div>

		<div class="form-group col-md-6">
			<label for="department">Select a Department</label>
			<select name="department_id"  cols="5" rows="5" class="form-control">
				@foreach($departments as $department)
					<option value="{{ $department->id}}">{{ $department->name }}</option>
				@endforeach
			</select>
		</div>
		<div class="form-group col-md-6">
			<label for="salary">Salary</label>
			<input type="text" name="salary" placeholder="Salary" id="salary" class="form-control">
		</div>
		
		
		
		<div class="text-center">
			<button class="btn btn-success" type="submit" >Create</button>
		</div>
	</form>

	@endsection