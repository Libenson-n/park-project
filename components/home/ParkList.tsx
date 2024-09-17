import { dummyData } from "@/utils/dummyData";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const ParkList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {dummyData.map((park) => (
        <Card key={park.id} className="flex w-64 flex-col justify-between">
          <CardHeader>
            <CardTitle className="capitalize">{park.name}</CardTitle>
            <CardDescription className="capitalize">
              {park.city}
            </CardDescription>
          </CardHeader>
          <CardContent className="mx-auto">
            <Image
              src={park.image}
              alt={park.name}
              width={250}
              height={200}
              className="rounded-md shadow-md"
            />
          </CardContent>
          <CardFooter>
            <div className="flex flex-col justify-between gap-3">
              <Button className="w-full bg-violet-600 hover:bg-violet-800">
                Create an event
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
};

export default ParkList;
