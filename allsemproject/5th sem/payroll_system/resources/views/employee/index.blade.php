@extends('layouts.app')


@section('content')

	<hr>	
		<h1 class="text-center">Employees</h1>	
	<hr> 
        <a href="{{route('employee.create')}}" class="btn btn-primary">Create</a>
	
	<br>
	<br>
	<table class= "table table-hover" id="filterTable">
		<thead>					
			<th>Name</th>
			<th>Email</th>
			<th>Address</th>
			<th>Role</th>
			<th>Department</th>
			<th>Salary</th>
			<th>Edit</th>	
			<th>Trash</th>
		</thead>		
			
		<tbody>
			@if($employees->count()> 0)
				@foreach($employees as $employee)
					<tr>
                        <td>
							{{$employee->name}}
						</td>								
                        <td>
							{{$employee->email}}
						</td>
						<td>
							{{$employee->address}}
						</td>
						
                        <td>
							{{$employee->role->name??null}}
						</td>
						<td>
							{{$employee->department->name??null}}
						</td>
						<td>
							{{$employee->salary}}
						</td>
						<td>
                            <a href="{{route('employee.edit', $employee->id)}}" class="btn btn-success">edit</a>
						</td>
						<td>
							<a href="{{route('employee.destroy', $employee->id)}}" class="btn btn-danger">Bin</a>
						</td>
						<td>
                            <a href="{{route('roll.show', $employee->id)}}">Payroll Show</a>
						</td>
					</tr>
				@endforeach
			@else
				<tr> 
					<th colspan="5" class="text-center">Empty</th>
				</tr>
			@endif
		</tbody>						
	</table>
@endsection