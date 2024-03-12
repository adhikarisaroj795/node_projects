@extends('layouts.app')

@section('content')

	<hr>
		<h1 class="text-center">Payroll</h1>
	<hr>
    <a href="{{route('payroll.create')}}" class="btn btn-primary">created</a>
	<br>
	<br>
	<table class= "table table-hover" id="filterTable">
		<thead>	
			<th>Date-issued</td>
			<th>Employee Name</th>
			<th>Base Salary</th>
			<th>Over-Time</th>
			<th>Hours</th>
			<th>Rate</th>
			<th>Gross</th>
			<th>Edit</th>	
			<th>Trash</th>
		</thead>		
			
		<tbody>
			@if($payroll->count()> 0)
				@foreach($payroll as $payroll)
					<tr>		
						<td>
                            {{$payroll->created_at}}
						</td>
						<td>
                           {{($payroll->Employee_id)? $payroll->employee->name : null}}
						</td>
                        <td>{{$payroll->salary}}</td>
                        <td>{{$payroll->over_time}}</td>
                        <td>{{$payroll->hours}}</td>
                        <td>{{$payroll->rate}}</td>
                        <td>{{$payroll->gross}}</td>
						
						
						<td>
                            <a href="{{route('payroll.edit', $payroll->id)}}" class="btn btn-success">edit</a>
						</td>
						<td>
							<a href="{{route('payroll.destroy', $payroll->id)}}" class="btn btn-danger">Bin</a>
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