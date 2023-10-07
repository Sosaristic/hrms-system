import { cn } from "@/lib/utils";
import Image from "next/image";

type AvatarProps = {
  imageUrl: string;
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md";
  alt: string;
  className?: string;
};

export default function Avatar({
  imageUrl,
  size,
  rounded,
  alt,
  className,
}: AvatarProps) {
  const normal = "h-[3rem] w-[3rem] relative rounded-full overflow-hidden";

  const defaultClasses = cn(normal, {
    "h-[2rem] w-[2rem]": size === "small",
    "h-[4rem] w-[4rem]": size === "medium",
    "h-[5rem] w-[5rem]": size === "large",
    "rounded-sm": rounded === "sm",
    "rounded-md": rounded === "md",
  });
  const combinedClasses = cn(defaultClasses, className);
  return (
    <div className={combinedClasses}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        priority
        sizes="w-full h-full"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
