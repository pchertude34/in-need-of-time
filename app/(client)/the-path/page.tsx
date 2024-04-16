import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ThePathPage() {
  return (
    <div className="container mx-auto mt-10">
      <Card className="space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-medium">Choose Your Location</h2>
          <p>Type an address for yourself, or someone you'd like to assist</p>
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" />
        </div>
        <div>
          <p className="mb-4">Or use your current location:</p>
          <Button>Use Current Location</Button>
        </div>
      </Card>
    </div>
  );
}
