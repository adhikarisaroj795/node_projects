<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function loginForm()
    {
        if(auth()->check())
        return redirect()->route('dashboard');
        return view('auth.login');
    }

    public function registerForm()
    {
        if(auth()->check())
        return redirect()->route('dashboard');
        return view('auth.register');
    }

    public function registerUser(RegisterRequest $request)
    {
        // dd($request->all());
        $user = new User();
        $user ->name = $request->get('name');
        $user ->email = $request->get('email');
        $user ->password = bcrypt($request->get('password'));
        $user->save();
        return redirect('/')->with(['msg'=>"User created Successful"]);
    }
}
