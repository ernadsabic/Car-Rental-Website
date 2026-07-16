import { Loader2 } from "lucide-react";

export default function CarsLoading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
