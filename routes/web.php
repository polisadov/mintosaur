<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::group(['prefix' => LaravelLocalization::setLocale()], function () {
    Route::get('/', function () {
        if(isset($_GET) && array_key_exists('pass',$_GET) && $_GET['pass']='VERSTAK'){
            return view('main');
        }

    });
});


