import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    let locale = localStorage.getItem('locale') || 'sr';

    let translate = {
        "We can't find a user with that email address." : 'Ne postoji user sa ovom email adresom',
    }
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            {
                locale == 'en' ?
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your email
                        address and we will email you a password reset link that will
                        allow you to choose a new one.
                    </div>
                    :
                    <div className="mb-4 text-sm text-gray-600">
                        Zaboravili ste lozinku? Nema problema. Samo nam recite vašu email adresu i poslaćemo vam link za resetovanje lozinke,
                        
                    </div>

            }


            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"s
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={locale == 'en' ? errors.email : translate[errors.email]} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        {
                            locale == 'en' ? "Email Password Reset Link" : "Pošalji link za resetovanje lozinke"
                        }
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
