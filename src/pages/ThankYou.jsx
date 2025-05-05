export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
      <p className="text-lg mb-6">Your message has been sent successfully. We'll be in touch soon.</p>
      <a href="/" className="text-blue-600 hover:underline">Go back to homepage</a>
    </div>
  );
}
