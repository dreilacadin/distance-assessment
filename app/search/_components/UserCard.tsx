import { User } from "@/app/search/dummyUsers";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="my-8 rounded-lg border border-gray-200 bg-white p-8 shadow">
      <ul className="flex flex-col space-y-2 text-slate-800">
        <li className="flex items-center space-x-2">
          <UserCircleIcon className="size-5 text-gray-700" />
          <span className="text-lg font-semibold">{user.name}</span>
        </li>
        <li className="flex items-center space-x-2">
          <EnvelopeIcon className="size-5 text-gray-700" />
          <span data-testid="email">{user.email}</span>
        </li>
        <li className="flex items-center space-x-2">
          <MapPinIcon className="size-5 text-gray-700" />
          <div>
            <span>{user.address.street}, </span>
            <span>{user.address.suite}, </span>
            <span>{user.address.city}, </span>
            <span>{user.address.zipcode}</span>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <PhoneIcon className="size-5 text-gray-700" />
          <span>{user.phone}</span>
        </li>
        <li className="flex items-center space-x-2">
          <GlobeAltIcon className="size-5 text-gray-700" />
          <span>{user.website}</span>
        </li>
        <li className="flex items-center space-x-2">
          <BriefcaseIcon className="size-5 text-gray-700" />
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </li>
      </ul>
    </div>
  );
}
