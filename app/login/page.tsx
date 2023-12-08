import RealLoginForm from './login-form';
 
// This displays the login form component
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <RealLoginForm />
      </div>
    </main>
  );
}