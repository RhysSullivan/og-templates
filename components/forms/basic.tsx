import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageSelector } from "@/components/image-selector";

export function BasicOGForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your logo by changing the properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <div className="flex space-x-2">
                <Input id="title" value={"Hello World"} />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <div className="flex space-x-2">
                <Input id="description" value={"This is a description"} />
              </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="logo">Logo</Label>
              <ImageSelector id="logo" onChange={() => {}} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
