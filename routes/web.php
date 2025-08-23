<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// test homepage
Route::get('/home',function(){
    return Inertia::render('Home');
});

Route::get('/products',function(){
    return Inertia::render('Products');
});

Route::get('/page',function(){
    return Inertia::render('Page');
});

Route::get('/blog',function(){
    return Inertia::render('Blog');
});

Route::get('/contact',function(){
    return Inertia::render('Contact');
});

Route::get('/login/auth/google', [App\Http\Controllers\Auth\GoogleController::class, 'redirectToGoogle'])->name('google.login');
Route::get('/login/auth/google-callback', [App\Http\Controllers\Auth\GoogleController::class, 'handleGoogleCallback']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
