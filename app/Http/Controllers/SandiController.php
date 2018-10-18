<?php

namespace App\Http\Controllers;


class SandiController extends Controller
{

    public function __construct()
    {
    }

    public function common()
    {
        return view('main');
    }

    public function company()
    {
        return view('company');
    }

    public function blog()
    {
        return view('blog');
    }

}


