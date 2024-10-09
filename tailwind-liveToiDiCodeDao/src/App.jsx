import UsersList from "./Five/UsersList";
import ReviewForm from "./Four/ReviewForm";
import UserProfile from "./One/UserProfile";
import Profile from "./OnePractice/Profile";
import Collections from "./Three/Collections";
import JobList from "./Two/JobList";

export default function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EAF8]">
      {/* <Profile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      <UsersList />
    </div>
  );
}
