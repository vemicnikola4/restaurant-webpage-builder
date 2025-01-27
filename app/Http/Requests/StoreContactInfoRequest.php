<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactInfoRequest extends FormRequest
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
            'contactInfo.website'=>'nullable|url',
            'contactInfo.onlineOrders'=>'nullable|url',
            'contactInfo.instagram'=>'nullable|url',
            'contactInfo.facebook'=>'nullable|url',
            'contactInfo.location'=>'nullable|url',
            'contactInfo.phone'=>['required', 'regex:/^\+?[0-9]{1,4}?[-. ]?(\([0-9]{1,3}\))?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/'],
            'contactInfo.menuPosition'=>'required|string|in:center,left,right',
            'contactInfo.pageId'=>'required|exists:pages,id',

        ];
    }
    public function messages()
    {
        return [
            'contactInfo.phone.regex' => 'The contact phone field format is invalid.',
            'contactInfo.phone.required' => 'The contact phone field format is required.',
            'contactInfo.instagram.url' => 'The contact instagram link field format is invalid.',
            'contactInfo.facebook.url' => 'The contact facebook link field format is invalid.',
            'contactInfo.onlineOrder.url' => 'The contact online order link field format is invalid.',
            'contactInfo.website.url' => 'The contact website link field format is invalid' ,
            
            // 'email.required' => 'The email address is required.',
         
        ];
    }
}
