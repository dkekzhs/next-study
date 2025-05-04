import '../globals.css';

export const metadata = {
    title: 'Next Auth',
    description: 'Next.js Authentication',
  };
  

export default function AuthLayout({children}){
    return (
        <html lang="en">
            <header id="auth-header">
                <p>Weclome Back!</p>
                <form>
                    <button>Logout</button>
                </form>
            </header>
          <body>{children}</body>
        </html>
      );
}




