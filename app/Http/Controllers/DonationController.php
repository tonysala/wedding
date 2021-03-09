<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Stripe\Checkout\Session;
use Stripe\Exception\ApiErrorException;
use Stripe\Stripe;

class DonationController extends Controller
{
    public function donate(Request $request): JsonResponse
    {
        Stripe::setApiKey(env('STRIPE_API_KEY'));

        $amount = $request->json('amount');

        try {
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [
                    [
                        'price_data' => [
                            'currency' => 'gbp',
                            'product_data' => [
                                'name' => 'Donation',
                            ],
                            'unit_amount' => $amount * 100,
                        ],
                        'quantity' => 1,
                    ],
                ],
                'mode' => 'payment',
                'success_url' => 'https://salawedding.com/#success',
                'cancel_url' => 'https://salawedding.com/#cancel',
            ]);
        } catch (ApiErrorException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'error' => $e->getError(),
            ], $e->getHttpStatus());
        }

        return response()->json(['id' => $session->id]);
    }

    public function getPublishableKey(): Response
    {
        return response(env('STRIPE_PUBLISHABLE_KEY'));
    }
}
