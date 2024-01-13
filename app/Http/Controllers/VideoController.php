<?php

namespace App\Http\Controllers;

use App\Http\Resources\TagResource;
use App\Http\Resources\VideoResource;
use App\Http\Resources\VideoTagResource;
use App\Models\Video;
use App\Models\VideoTag;
use Illuminate\Http\Request;

class  VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // limit
//        $limit = $request->limit ?? 10;

        // search parameter
        $search = $request->q ?? null;

        // tags
        $tag = is_numeric($request->tag) ? (int)$request->tag : null;

        // author
        $author = $request->author ?? null;

        $videoId = [];
        if (!is_null($tag)) {
            $videoId = VideoTag::where('tag_id', $tag)->pluck('video_id');
        }


        $videos = Video::query();

        if (!empty($videoId)) {
            $videoId = collect($videoId);
            $videos = $videos->whereIn('id', $videoId);
        }
        if (!is_null($search)) {
            $videos = $videos->where('title', 'like', "%$search%");
        }

        if (!is_null($author)) {
            $videos = $videos->where('author', 'like', "%$author%");
        }

        $videos = $videos->orderBy('id', 'DESC')->get();

        $videos = VideoResource::collection($videos);

        $data = ["data" => $videos];

        return $data;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        return new VideoResource($video);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        $data = $request->all();
        foreach ($data as $key => $value) {
            $video[$key] = $value;
            $video->save();
        }

        return new VideoResource($video);
    }

    public function relatedVideo($id)
    {
        $tags = VideoTag::where('video_id', $id)->pluck('tag_id');

        $videoId = VideoTag::whereIn('tag_id', $tags)->distinct()->pluck('video_id');

        $videos = Video::whereIn('id', $videoId)->limit(5)->get();

        return VideoResource::collection($videos);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
