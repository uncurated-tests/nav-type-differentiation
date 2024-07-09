import { cookies } from "next/headers";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userCookies = cookies();
  const isAuthed = userCookies.get("isAuthed")?.value === "true";

  return <div data-is-authed={isAuthed}>{children}</div>;
}
