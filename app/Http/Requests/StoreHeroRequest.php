<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHeroRequest extends FormRequest
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
            'title'=>'string|required|min:2',
            'subtitle'=>'string|required|min:2',
            'textBoxPosition'=>'string|required|in:center,left,right',
            'pageId'=>'required|exists:pages,id',
        ];
      
    }
    public function messages(){
        return   [
            'title.required' => 'The title field is required.',
            'title.string'=> 'The title field must be a string.',
            'title.min'=> 'The title field must be at least 2 characters.',
            'subtitle.required' => 'The subtitle field is required.',
            'subtitle.string'=> 'The subtitle field must be a string.',
            'subtitle.min'=> 'The subtitle field must be at least 2 characters.',
            'textBoxPosition.string'=>'Field required. Values allowed:center,left,right.',
            'textBoxPosition.required'=>'Field required. Values allowed:center,left,right.',
            'textBoxPosition.in'=>'Field required. Values allowed:center,left,right.',
            'page_id|required'=>'Ups something went wrong. Try again.',
            'page_id|exists'=>'Ups something went wrong. Try again.',

           
        ];
    }
}
