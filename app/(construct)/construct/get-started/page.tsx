import { GetStartedForm } from "@/components/sections/get-started/GetStartedForm";

export const metadata = {
  title: "Get Started | Zerotone Construct",
  description: "Book a 20 minute demo with the team. See Zerotone on a project that looks like yours.",
};

export default function GetStartedPage() {
  return (
    <div className="flex-1 bg-surface pb-12 pt-16">
      <GetStartedForm />
    </div>
  );
}

