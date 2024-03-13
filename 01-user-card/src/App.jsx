import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
import "./user.css";
import user from "./user.json";

export default function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </div>
  );
}
