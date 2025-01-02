<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::middleware(['role:admin'])->group(function () {
        Route::get('/admin', function () {
            return Inertia::render('AdminDashboard');
        })->name('admin.dashboard');
    });

    Route::middleware(['role:approver'])->group(function () {
        Route::get('/approver', function () {
            return Inertia::render('ApproverDashboard');
        })->name('approver.dashboard');
    });
});
