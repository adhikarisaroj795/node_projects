<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => ['required', 'confirmed', "min:8"]
        ];
    }
    public function messages()
    {
        return [
            "name.required" => "name can not be empty",
            "email.required" => "email can not be empty",
            "email.email" => "given email is not a valid email",
            "email.unique" => "user already exit",
            "password.required" => "password can not be empty",
            "password.confirmed" => "password and confirmed password does not match",
            "password.min" => "password length must have 8 characteres",
        ];
    }
}
