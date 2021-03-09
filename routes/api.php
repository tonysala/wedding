<?php

use App\Http\Controllers\DonationController;
use App\Http\Controllers\RsvpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/rsvp', [RsvpController::class, 'store']);
Route::post('/donate', [DonationController::class, 'donate']);
Route::get('/publishable_key', [DonationController::class, 'getPublishableKey']);
