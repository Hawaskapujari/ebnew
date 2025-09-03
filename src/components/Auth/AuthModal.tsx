import React, { useState } from 'react';
import { X } from 'lucide-react';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);

  if (!isOpen) return null;

  const handleSuccess = () => {
    onClose();
    window.location.reload(); // Refresh to update auth state
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {mode === 'signin' ? (
            <SignIn
              onSuccess={handleSuccess}
              onSwitchToSignUp={() => setMode('signup')}
            />
          ) : (
            <SignUp
              onSuccess={handleSuccess}
              onSwitchToSignIn={() => setMode('signin')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;