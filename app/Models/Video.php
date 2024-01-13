<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $guarded = [];

//    protected $with = ['tag'];

    public function tag()
    {
        return $this->hasMany(VideoTag::class);
    }

}
