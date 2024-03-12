@extends('layouts.app')


@section('content')

	<div class="panel panel-default">
		<div class="panel-heading">
			Edit Role : 
		</div>
	   
	   <div class="panel-body">
			<form action ="{{ route('roll.update', $roll->id)}}" method="POST">
				{{ csrf_field() }}
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" name="name" value="{{$roll->name}}" class="form-control">
				</div>
				<div class="form-group">
					<div class="text-center">
						<button class ="btn.btn.success" type="submit">Update</button>
					</div>
				</div>
			</form>	
	    </div>
	</div>
    
@endsection

