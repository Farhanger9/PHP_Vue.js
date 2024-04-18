<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProxyController extends Controller
{
    public function stallionExpress(Request $request)
    {

        $token = "YDchLhos8bDsSrdCn23jmjya08azjdaJ56Shu6tywNjb7ATFwRr8Zm8viM7S";

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_HTTPHEADER => [
                "Authorization: Bearer $token",
                "Content-Type: application/json"
            ],
            CURLOPT_POSTFIELDS => json_encode($request->all()),
            CURLOPT_URL => "https://sandbox.stallionexpress.ca/api/v3/rates",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "POST",
        ]);

        $response = curl_exec($curl);
        $error = curl_error($curl);

        curl_close($curl);

        if ($error) {
            return response()->json(['error' => $error], 500);
        } else {
            // Decode the JSON response
            $decodedResponse = json_decode($response, true);
            return response()->json($decodedResponse);
        }
    }
}
