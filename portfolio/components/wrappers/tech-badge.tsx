import { Badge } from "@/components/ui/badge";

export default function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="bg-purple-100 dark:bg-purple-600/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 text-xs font-medium"
    >
      {children}
    </Badge>
  );
}
