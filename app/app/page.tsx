import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Button variant={"default"} className="px-3">
        default
      </Button>
      <Button variant={"destructive"} className="px-10">
        button
      </Button>
      <Button variant={"ghost"}>button</Button>
      <Button variant={"link"}>button</Button>
      <Button variant={"outline"}>button</Button>
      <Button variant={"secondary"}>button</Button>
      <Button variant={"outline"}>button</Button>
    </div>
  );
}
