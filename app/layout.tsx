import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata = {
  title: "Home | Next Movies",
  description: "The best movies in the world",
  keywords: "movies, nextjs, react",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
