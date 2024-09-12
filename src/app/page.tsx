import HomePage from "@/components/HomePage";
import ProtectedLayout from "@/components/ProtectedLayout";

export default function Home() {
  return (
    <ProtectedLayout className="h-full mb-2 w-full">
      <HomePage/>
    </ProtectedLayout>
  );
}
