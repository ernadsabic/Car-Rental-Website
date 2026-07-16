"use client";
import { Button } from "./ui/button";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Props {
  total: number;
  current: number;
}

const PaginationControls = ({ total, current }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    // Gurni novi URL (npr. /auta?page=2)
    router.push(`${path}?${params.toString()}`);
  };
  return (
    <div>
      <div className="flex gap-4 items-center justify-end w-full ">
        <Button
          size={"icon"}
          variant={"outline"}
          className="inline-flex items-center justify-center rounded-full p-6 cursor-pointer"
          disabled={current === 1}
          onClick={() => handlePageChange(current - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
        <p className="text-xl text-gray-600">
          {current}/{total}
        </p>
        <Button
          size={"icon"}
          variant={"default"}
          className="inline-flex items-center justify-center rounded-full p-6 cursor-pointer"
          disabled={current === total}
          onClick={() => handlePageChange(current + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default PaginationControls;
