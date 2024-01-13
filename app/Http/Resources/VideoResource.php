<?php

namespace App\Http\Resources;

use Carbon\CarbonInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class VideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'author' => $this->author,
            'avatar' => $this->avatar,
            'duration' => $this->duration,
            'views' => $this->views,
            'link' => $this->link,
            'thumbnail' => $this->thumbnail,
            'likes' => $this->likes,
            'unlikes' => $this->unlikes,
            'tags' => TagResource::collection($this->tag),
            'created_at' => (string)Carbon::parse($this->created_at)->diffForHumans(now(), CarbonInterface::DIFF_ABSOLUTE),
            'updated_at' => (string)Carbon::parse($this->updated_at)->diffForHumans(now(), CarbonInterface::DIFF_ABSOLUTE),
        ];
    }
}
