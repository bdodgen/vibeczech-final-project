<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
  // redirects to login page
    public function index ()
    {
        return view('login.login');
    }
}
