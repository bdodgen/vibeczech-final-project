<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorkerController extends Controller
{
    public function detail()
    {
        return view('worker.detail');
    }

    public function logout ()
    {
        return view('login.login');
    }
}