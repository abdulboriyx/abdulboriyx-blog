import "./globals.css";

export const metadata = {
  title: "Tartibli o'qish",
  description: "Ingliz tili, matematika va shaxmat uchun kunlik o'quv sahifasi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
