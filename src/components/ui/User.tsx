import { Avatar } from "@/components";

interface UserProps {
  name: string;
  imageUrl: string;
  role?: string;
}
function User({ name, imageUrl, role }: UserProps) {
  return (
    <div className=" flex items-center gap-4 rounded-lg bg-white shadow-lg">
      <Avatar imageUrl={imageUrl} size="small" alt={name} />

      <div>
        <h2 className="text-gray-800 text-center font-lexend text-sm">
          {name}
        </h2>
        <h3 className="text-center  text-xs text-gray">{role}</h3>
      </div>
    </div>
  );
}

export default User;
