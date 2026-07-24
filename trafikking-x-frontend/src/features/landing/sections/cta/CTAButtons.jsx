import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



export default function CTAButtons() {

    const navigate = useNavigate();

  return (


      <div className="mt-12 flex flex-wrap justify-center gap-5">

  <Button
    size="lg"
    className="gap-2"
    onClick={() => navigate("/register")}
  >
    Launch Platform

    <ArrowRight className="h-5 w-5" />
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="gap-2"
    onClick={() => {
      document
        .getElementById("workflow")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }}
  >
    <PlayCircle className="h-5 w-5" />

    Watch Demo
  </Button>

</div>

  );

}