import { redirect } from "next/navigation";

// The site root ("/") is a separate, out-of-scope marketing home page
// (see zerotoneai-home-content.md). This project only rebuilds /construct,
// so root sends visitors straight there until that's wired up elsewhere.
export default function RootRedirect() {
  redirect("/construct");
}
