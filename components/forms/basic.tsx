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
import { useTemplateStore } from "../template-store";

export function BasicOGForm() {
  const { template, setTemplate } = useTemplateStore();
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
                <Input
                  id="title"
                  value={template.params.title.text}
                  onChange={(e) => {
                    setTemplate({
                      ...template,
                      params: {
                        ...template.params,
                        title: {
                          ...template.params.title,
                          text: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <div className="flex space-x-2">
                <Input
                  id="description"
                  value={template.params.description.text}
                  onChange={(e) => {
                    setTemplate({
                      ...template,
                      params: {
                        ...template.params,
                        description: {
                          ...template.params.description,
                          text: e.target.value,
                        },
                      },
                    });
                  }}
                />
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
