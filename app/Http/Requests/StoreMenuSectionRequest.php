<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMenuSectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            
            'menu'=>'required|array',
            'menu.*.id'=>'required|string',
            'menu.*.title'=>'required|string|min:2',
            'menu.*.note'=>'nullable|string',
            'menu.*.items'=>'required|array|min:1',
            'menu.*.pageId'=>'required|exists:pages,id',
            'menu.*.items.*.id' =>'required|string|min:2',

             'menu.*.items.*.itemTitle' =>'required|string|required|min:2',
             'menu.*.items.*.itemDescription' =>'required|string|required|min:2',
             'menu.*.items.*.itemPrice' =>'required|integer|min:1',
            'menu.*.items.*.media' =>'required',
        ];
    }
    public function messages(){
        return   [
            'menu.*.title.required' => 'The title field is required.',
            'menu.*.title.string'=> 'The title field must be a string.',
            'menu.*.title.min'=> 'The title field must be at least 2 characters.',
            'menu.*.id.required' => 'The id is invalid.',
            'menu.*.id.string'=> 'The id is invalid.',
            'menu.*.note.string'=> 'The section note must be text.',
            'menu.*.items.required'=> 'Section must have at least one item.',
            'menu.*.items.array'=> 'Section must have at least one item.',
            'menu.*.items.min'=> 'Section must have at least one item.',
            'menu.*.items.*.itemTitle.required'=>'The title field is required.',
            'menu.*.items.*.itemTitle.string'=> 'The title field must be a string.',
            'menu.*.items.*.itemDescription.required'=>'The description field is required.',
            'menu.*.items.*.itemDescription.string'=>'The description feald must be a string.',
            'menu.*.items.*.itemDescription.min'=>'The description feald must be at least 2 characters.',
            'menu.*.items.*.itemPrice.required'=>'The price feald is required.',
            'menu.*.items.*.itemPrice.integer'=>'The price feald must be a number.',
            'menu.*.items.*.itemPrice.min'=>'The price feald must be a number minimum 1.',

            'menu.*.items.*.media.required' => 'The media field is required.',
            // 'menu.*.items.*.media.image'=> 'The title field must be an image.',
            // 'menu.*.items.*.media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',

           
        ];
    }
}
