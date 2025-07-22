import { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

type AuthMode = 'login' | 'register' | 'forgot-password';

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login');

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return (
          <LoginForm
            onToggleMode={() => setMode('register')}
            onForgotPassword={() => setMode('forgot-password')}
          />
        );
      case 'register':
        return (
          <RegisterForm onToggleMode={() => setMode('login')} />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordForm onBack={() => setMode('login')} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {renderForm()}
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center gradient-bg">
        <div className="text-center text-white space-y-6 px-8">
          <h2 className="text-4xl font-bold">
            Manage Projects Like a Pro
          </h2>
          <p className="text-xl opacity-90">
            Track progress, analyze performance, and deliver exceptional results
            with our comprehensive project management platform.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-effect rounded-lg p-4 bg-white/10">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div className="glass-effect rounded-lg p-4 bg-white/10">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
            <div className="glass-effect rounded-lg p-4 bg-white/10">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
            <div className="glass-effect rounded-lg p-4 bg-white/10">
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-sm opacity-80">Tasks Managed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}