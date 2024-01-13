<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * server error response function
     *
     */
    public function __invoke()
    {
        $data = Tag::orderBy('id', 'DESC')->get();
        return response()->json($data);
    }

}
