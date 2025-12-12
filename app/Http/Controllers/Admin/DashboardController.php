<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // You can add real stats here later
        $stats = [
            'totalUsers' => 0,
            'totalChats' => 0,
            'activeToday' => 0,
            'avgResponseTime' => '0s'
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats
        ]);
    }
}
