import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ThePathPage() {
  return (
    <div className="container mx-auto px-4">
      <Card className="p-6">
        <div>
          <h2 className="text-2xl font-medium">Choose Your Location</h2>
          <p>Type an address for yourself, or someone you'd like to assist</p>
        </div>
        <div></div>
      </Card>
    </div>
  );
}
