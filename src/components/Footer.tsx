// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-white p-4 mt-4">
      <div className="flex flex-col items-center text-red-900 w/95 text-lg">
        <div className="flex justify-between w-full">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <span>© 2025 Eats</span>
      </div>
    </footer>
  );
};

export default Footer;
