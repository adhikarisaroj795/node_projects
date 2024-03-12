@extends('layouts.app')


@section('content')
	<hr>
		<h1 class="text-center">Update Employee</h1>
	<hr>
	<form action="{{ route('payroll.update', $payroll->id)}}" method="POST">
			{{ csrf_field() }}
			
		<div class="form-group col-lg-6">
			<label for="Employee">Select a Employee</label>
			<select name="employee_id"  cols="5" rows="5" class="form-control" id="employee_id">
				@if($employees)
				@foreach($employees as $employee)
					<option name = "employee_id" value="{{$employee->id??null}}" {{ ($employee->id != null) ? "selected" : "" }}>
					{{$employee->name}}
					</option>
				@endforeach
				@endif
			</select>
		</div>
		
		<div class="form-group col-md-6">
			<label for="email">salary: </label>
			<input type="text" name="salary" value="{{$payroll->salary}}" class="form-control" id="salary">		
		</div>
		

		<div class="form-group col-md-6">
				<label for="overtime">Over Time</label>
				<select id = "overtime" name="over_time"  cols="5" rows="5" class="form-control" value="{{$payroll->over_time}}" selected>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
				</select>
			</div>
		
		
		
		{{-- <div class="form-group col-md-6">
			<label for="address">Overtime: </label>
			<input type="text" name="over_time"  value= "{{$payroll->over_time}}" class="form-control">		
		</div> --}}

		<div class="form-group col-md-6">
			<label for="address">Hour : </label>
			<input type="text" name="hours"  value= "{{$payroll->hours}}" class="form-control" onkeyup="calcGrossSalary()" value= "0" id="hours" >		
		</div>

		<div class="form-group col-md-6">
			<label for="address">Rate: </label>
			<input type="text" name="rate"  value= "{{$payroll->rate}}" class="form-control" onkeyup="calcGrossSalary()" value= "0" id="rate">		
		</div>

		<div class="form-group col-md-6">
			<label for="address">Gross: </label>
			<input type="text" name="gross"  value= "0" id="gross" class="form-control">		
		</div>

		<div class="text-center">
			<button class="btn btn-success" type="submit" >Update Changes</button>
		</div>
	</form>

@endsection

@section('page-specific-script')

    <script>
        $("#employee_id").change(function() {
            let id = $(this).val();
            let url = "{{ route('get-employee', 'id') }}";
            url = url.replace('id', id)
            ajaxFxn(url, {}, function(response) {
                response = JSON.parse(response)
                $("#salary").val(response.salary)
            })
        })
        function ajaxFxn(url, data, success, error) {
            $.ajax({
                type: 'GET',
                dataType: 'HTML',
                url: url,
                timeout: 5000,
                success: function(data, textStatus) {
                    success(data)
                },
                error: function(xhr, textStatus, errorThrown) {
                    error(error);
                }
            });
        }
        $("#hours").keyup(() => {
            calculateGross()
        })
        $("#rate").keyup(() => {
            calculateGross()
        })
        function calculateGross() {
            let hour = $("#hours").val();
            let rate = $("#rate").val();
            rate = rate ? rate : 1
            let salary = $("#salary").val();
            let gross = (parseFloat(salary) + (parseFloat(rate) * parseInt(hour)))
            $("#gross").val(gross)
        }
        $("#overtime").change(() => {
		let salary = $("#salary").val();
            let val = $("#overtime").val()
            if (val == "No") {
			let hour = $("#hours").val(0);
            let rate = $("#rate").val(0);
		$("#gross").val(salary)
                $(".over_time").hide()
            } else {
                $(".over_time").show()
            }
        })
    </script>

@endsection