@extends('layouts.app')


@section('content')

	<hr>	
		<h1 class="text-center">Roles</h1>	
	<hr>   	   
	<form action ="{{ route('roll.store') }}" method="POST">
		{{ csrf_field() }}
		
		<div class="form-group col-lg-6">
			<label for="name">Name</label>
			<input type="text" name="name" class="form-control">
		</div>
		
		<div class="form-group">
			<div class="text-center">
				<button class ="btn.btn.success" type="submit">Create</button>
			</div>
		</div>
	</form>	
@endsection

