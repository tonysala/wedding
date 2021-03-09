<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RsvpController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required',
            'contact_number' => 'required|string',
            'attend' => 'required|string',
            'notes' => 'string',
        ]);

        Log::info(json_encode($fields));

        return response()->json([
            'error' => false,
        ]);
    }
}
