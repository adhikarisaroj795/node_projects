@extends('layouts.app')


@section('content')
	<div class="col-lg-12">
		<h1 class="page-header">Payroll</h1>
	</div>
	
	<form action="{{route('payroll.store')}}" method="POST">
			{{ csrf_field() }}
		
			{{-- <div class="form-group col-md-4">
				<label for="role">Select a Employee</label>
				<select name="employee_id"  cols="5" rows="5" class="form-control">
					@foreach($employees as $employee)
						<option value="{{ $employee->id }}">{{ $employee->name }}</option>
					@endforeach
				</select>
			</div>
		
			<div class="form-group col-md-4">
				<label for="role">Salary</label>
				<input onkeyup="calcGrossSalary()" type="number" name="salary" class="form-control" id = "salary">
				
			</div> --}}

			{{-- added part --}}
			<div class="form-group col-md-4">
				<label for="role">Select a Employee</label>
				<select name="employee_id" id="employee_id" cols="5" rows="5" class="form-control">
					@foreach ($employees as $employee)
						<option value="{{ $employee->id }}">{{ $employee->name }}</option>
					@endforeach
				</select>
			</div>
	
			<div class="form-group col-md-4">
				<label for="role">Salary</label>
				<input type="text" name="salary" id="salary" class="form-control">
			</div>
			{{-- added part for salary --}}

			<div class="form-group col-md-4">
				<label for="overtime">Over Time</label>
				<select id = "overtime" name="over_time"  cols="5" rows="5" class="form-control">
						<option value="Yes">Yes</option>
						<option value="No">No</option>
				</select>
			</div>
		
		<div class="form-group col-md-4">
			<label for="town">Hours: </label>
			<input onkeyup="calcGrossSalary()" value= "0" type="number" name="hours" class="form-control" id = "hours">		
		</div>
		
		<div class="form-group col-md-4">
			<label for="city">Rate: </label>
			<input onkeyup="calcGrossSalary()" value = "0" type="number" name="rate" class="form-control" id = "rate">		
		</div>
		
		<div class="form-group col-md-4">
			<label for="country">Gross: </label>
			<input type="text" value = "0" name="gross" class="form-control" id = "gross">		
		</div>		
		
		<div class="text-center">
			<button class="btn btn-success" type="submit" >Create</button>
		</div>
	</form>

	@endsection


	{{-- from here for salary added code  --}}
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