<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.modals');
    }

    public function logout ()
    {
        return view('login.login');
    }
}
