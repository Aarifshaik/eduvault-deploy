import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useNavigate } from "react-router-dom";
interface ProfileProps {
  name: string;
  avatar?: string;
  username: string;
}


export default function Profile({ name, avatar,username }: ProfileProps) {
  const navigate = useNavigate();
  const handleLogout = () => {

    fetch("http://localhost:8080/cuslogout", {
      method: 'GET',
      credentials: 'include', // Include cookies (for session-based logout)
    })
      .then(response => {
        if (response.ok) {
          console.log("Logged out successfully");
          localStorage.clear();
          console.log(localStorage.getItem("token"));
          navigate("/login")
        } else {
          console.error("Logout failed");
        }
      })
      .catch(error => {
        console.error("Error during logout:", error);
      });
    console.log("Logged out");
  };
  

  return (
    <div className="flex items-center gap-4">
      <Dropdown backdrop="blur" placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: avatar,
            }}
            className="transition-transform"
            description={`@${username}`}
            name={name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@{username}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem onClick={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
