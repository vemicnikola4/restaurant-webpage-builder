<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->greeting('Hello!/Podrav!')
                ->subject('Verify Email Address/Verifikulte vaš email')
                ->line('Click the button below to verify your email address/Kliknite na dugme da verifikujete svoj email')
                ->action('Verify/Verifikuj', $url)
                ->salutation('Regards/Srdačan pozdrav vidirestoran.rs');
        });
        ResetPassword::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->greeting('Hello!/Podrav!')
                ->subject('Reset Password Notification/Resetujte vašu lozinku')
                ->line('Click the button below to reset your password/Kliknite na dugme da resetujete vašu lozinku.')
                ->action('Reset/Restetuj', $url)
                ->salutation('Regards/Srdačan pozdrav vidirestoran.rs');
        });
        
    }
}
