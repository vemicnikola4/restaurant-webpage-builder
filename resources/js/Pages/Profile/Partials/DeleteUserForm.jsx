import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    let locale = localStorage.getItem('locale') || 'sr';

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    {locale == 'en' ? 'Delete Account' : 'Izbrišite nalog'}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    {locale == 'en' ? 'Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account,please download any data or information that you wish to retain.' : 'Jednom kada ibrišete svoj nalog, svi vaši podaci će biti trajno izbrisani. Pre brisanja svog naloga preuzmite sve što želite da sačuvate.'}


                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                {locale == 'en' ? 'Delete Account' : 'Izbrišite nalog'}
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        {locale == 'en' ? 'Are you sure you want to delete your account?' : 'Da li ste sigurni da želite da izbrišite nalog'}

                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        {locale == 'en' ? 'Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.' : 'Jednom kada obrišete svoj nalog,svi vaši podaci će biti trajno izbrisani. Unesite svoju lozinku kako bi potvrdili trajno brisanje naloga.'}

                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>

                            {locale == 'en' ? 'Cancel' : 'Otkaži'}

                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            {locale == 'en' ? ' Delete Account' : 'Obriši nalog'}


                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
