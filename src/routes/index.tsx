import { createFileRoute } from "@tanstack/react-router";
import { LandingExperience } from "@/components/LandingExperience";
export const Route = createFileRoute("/")({ component: LandingExperience });
