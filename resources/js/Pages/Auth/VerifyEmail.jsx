import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    let locale = localStorage.getItem('locale') || 'sr';

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            {
                locale == 'en' ?
                    <div className="mb-4 text-sm text-gray-600">



                        Thanks for signing up! Before getting started, could you verify
                        your email address by clicking on the link we just emailed to
                        you? If you didn't receive the email, we will gladly send you
                        another.
                    </div>
                    :
                    <div className="mb-4 text-sm text-gray-600">



                        Hvala što ste se registrovali! Pre nego što počnete molimo vas da verifikujete svoju email adresu klikom na link koji smo vam upravo poslali? Ako niste primili emejl rado ćemo vam ga poslati opet.
                    </div>

            }

            {status === 'verification-link-sent' && (

                <div className="mb-4 text-sm font-medium text-green-600">
                    {
                        locale == 'en' ?
                            <p>
                                A new verification link has been sent to the email address
                                you provided during registration.
                            </p>
                            :
                            <p>
                                Novi verifikacioni link je poslat na email adresu koju ste uneli prilikom registrovanja.
                            </p>
                    }

                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        {
                            locale == 'en' ?
                            "Resend Verification Email"
                        :
                        "Pošaljite verifikacioni Email ponovo"

                        }
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {
                            locale == 'en' ? 'Log out' : 'Izlogujte se'
                        }
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
