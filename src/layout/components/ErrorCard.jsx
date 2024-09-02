/* eslint-disable react/prop-types */
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ErrorCard = ({ error }) => {
  return (
    <Alert variant="destructive" className="mx-auto mt-14 w-fit px-8">
      <div className="flex gap-4">
        <AlertCircle className="mt-1 size-6" />
        <div>
          <AlertTitle className="text-2xl">Error</AlertTitle>
          <AlertDescription className="text-xl">
            {error.message}
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default ErrorCard;
