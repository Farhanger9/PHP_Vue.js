<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(Notes::whereUserId($request->user()->id)->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required',
        ]);

        $data['user_id'] = Auth::user()->id;
        $data['title'] = $request->title;
        $data['content'] = $request->content;

        $note = Notes::create($data);

        return response()->json($note);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notes  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Notes $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Notes $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notes $note)
    {
        Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required',
        ]);
        
        $note->update(['user_id'=> Auth::user()->id, 'title'=>$request->title, 'content' => $request->content ]);
        return response()->json($note);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notes $note)
    {
        $note->delete();
        return response()->json('success');
    }
}
