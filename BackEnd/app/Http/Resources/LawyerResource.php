<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

use App\Http\Resources\SpecializationResource;

class LawyerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        // dd($this)
        return [
            'id'      => $this->id,
            'price'   => $this->price,
            'span'    => $this->span,
            'about'  => $this->about,
            'location' => $this->location,
            'user' => $this->user,
            'verified' => $this->verified,
            'idImage' => $this->idImage,
            'lawyer_times' => $this->lawyer_time,
            'specialization' => $this->specialization,
            'number_of_followers' => $this->followers->count(),
            //'user' => UserResource::collection($this->can_be),
        ];

        // return[
        //     "id"=>$this->id,

        //     //"image"=>$this->image,

        //     "users"=>UserResource::collection($this->user),

        //    //"specialization"=>SpecializationResource::collection($this->lawyer),


        // ];
    }
}
