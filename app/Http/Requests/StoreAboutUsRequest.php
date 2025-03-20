<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAboutUsRequest extends FormRequest
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
            'title' => 'required|string|min:2|max:255',
            'description' => 'required|string|min:2',
            'textAligment'=>'required|string|in:center,left,right',
            'pageId'=>'required|exists:pages,id',
            

        ];
    }
    public function messages(){
        return   [
            'title.required' => 'The title field is required.',
            'title.string'=> 'The title field must be a string.',
            'title.min'=> 'The title field must be at least 2 characters.',
            'description.required' => 'The description field is required.',
            'description.string'=> 'The description field must be a string.',
            'description.min'=> 'The description field must be at least 2 characters.',
            'textAligment.string'=>'Field required. Values allowed:center,left,right.',
            'textAligment.required'=>'Field required. Values allowed:center,left,right.',
            'textAligment.in'=>'Field required. Values allowed:center,left,right.',
            'page_id|required'=>'Ups something went wrong. Try again.',
            'page_id|exists'=>'Ups something went wrong. Try again.',

           
        ];
    }
}
