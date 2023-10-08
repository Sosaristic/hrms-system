import { Avatar } from "@/components";

interface UserProps {
  name: string;
  imageUrl: string;
  role: string;
}
function User({ name, imageUrl, role }: UserProps) {
  return (
    <div className="mx-auto max-w-xs rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-5 flex items-center justify-center">
        <Avatar imageUrl={imageUrl} size="medium" rounded="md" alt={name} />
      </div>

      <h2 className="text-gray-800 mb-2 text-center text-xl font-semibold">
        {name}
      </h2>
      <h3 className="text-gray-600 mb-4 text-center text-sm">{role}</h3>
    </div>
  );
}

export default User;
