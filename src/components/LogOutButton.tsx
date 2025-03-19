"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner"; // Correct Sonner import
import { useRouter } from "next/navigation";


function LogOutButton() {
    const router = useRouter
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = null;
    if (!errorMessage) {
      toast.success("Logged out", {
        description: "You have been successfully logged out.",
        style: { backgroundColor: "#047857", color: "white" },
      });
      const routerInstance = router(); 
      routerInstance.push("/")
    }else{
        toast.error("Error", {
            description: "error Message",
            style: { backgroundColor: "#047857", color: "white" },
          });
    }

    setLoading(false);
  };

  return (
    <Button variant="outline" onClick={handleLogout} className="w-24" disabled={loading}>
      {loading ? <Loader2 className="w-6 h-6 !animate-spin" /> : "Log out"}
    </Button>
  );
}

export default LogOutButton;
