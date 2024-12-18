import { FolderPlusIcon,TrashIcon } from "@heroicons/react/24/solid";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Label } from "@/components/ui/label";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  // Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { SharedSelection } from "@nextui-org/system";
 
  


const TABLE_ROWS = [
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "$14,000",
    issued: "31 Jan 2024",
    date: "31 Feb 2024",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "$3,000",
    issued: "24 Jan 2024",
    date: "24 Feb 2024",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "$20,000",
    issued: "12 Jan 2024",
    date: "12 Feb 2024",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "$5,600",
    issued: "10 Jan 2024",
    date: "10 Feb 2024",
  },
];
 
export function TableWithSearch() {
  const [users, setUsers] = useState<{ id: string; username: string; email?: string; institution?: string; dept?: string; title?: string; author?: string; category?: string; Book_ids?: string; Book_Names?: string; }[]>([]);
  const [tableHead, setTableHead] = useState<{ head: string }[]>([]);
  const [keyType, setKeyType] = useState("users");

  useEffect(() => {
    // Generate table headers based on the key value
    const generateTableHead = (key: string) => {
      switch (key) {
        case 'users':
          return [
            { head: "ID" },
            { head: "Username" },
            { head: "Email" },
            { head: "Institution" },
            { head: "Dept" },
            { head: "Actions" },
          ];
        case 'books':
          return [
            { head: "ID" },
            { head: "Title" },
            { head: "Author" },
            { head: "Category" },
          ];
        case 'mappings':
          return [
            { head: "Index" },
            { head: "Username" },
            { head: "Book_IDs" },
            { head: "Book_Names" },
            { head: "Actions" },
          ];
        default:
          return [];
      }
    };
    console.log("AA");
    console.log(keyType); 

    // Set the table head based on the keyType prop
    if (keyType) {
      setTableHead(generateTableHead(keyType));
    }
  }, [keyType]);

  useEffect(() => {
    // Fetch users from the backend
    if(keyType === "users"){
      fetch('http://localhost:8080/db/all')
        .then((response) => response.json())
        .then((data) => {
          const tableRows = data.map((user:any) => ({
            id: `#${user.id}`,
            username: user.username,
            email: user.email, // You can modify this based on your actual data
            institution: user.institution, // You can modify this based on your actual data
            dept: user.dept, // You can modify this based on your actual data
          }));
          setUsers(tableRows);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }
    if(keyType === "books"){
      fetch('http://localhost:8080/api/books/get')
        .then((response) => response.json())
        .then((data) => {
          const tableRows = data.map((book:any) => ({
            Index: `#${book.id}`,
            title: book.title,
            author: book.author, // You can modify this based on your actual data
            category: book.category, // You can modify this based on your actual data
             // You can modify this based on your actual data
          }));
          setUsers(tableRows);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }
    if (keyType === "mappings") {
      fetch('http://localhost:8080/api/user-books/all-user-books')
        .then((response) => response.json())
        .then((data) => {
          const tableRows = data.map((map: any) => ({
            id: `#${map.id}`, // Mapping the ID field
            username: map.user.username, // Extract username
            Book_ids: map.book.id, // Extract Book ID
            Book_Names: map.book.title, // Extract Book Title
          }));
          setUsers(tableRows);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }
  }, [keyType]);


  const handleSelectBook = (keys: SharedSelection) => {
    const value = Array.from(keys)[0] as string; // Get the selected key
    setKeyType(value); // Update the category state
  };

  const handleAddMapping = () => {
    // Add your logic here
    console.log("Add Mapping");
  }

  const handleDeleteMapping = () => {
    // Add your logic here
    console.log("Delete Mapping");
  }

  const handleDeleteUser = (username: string) => {
    if (!username) return;
  
    // Confirm the deletion action
    const confirmed = window.confirm(`Are you sure you want to delete the user: ${username}?`);
    if (!confirmed) return;
  
    fetch(`http://localhost:8080/db/deleteUser?username=${username}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert(`User ${username} has been deleted successfully.`);
          // Refresh the user list after deletion
          setUsers((prevUsers) => prevUsers.filter((user) => user.username !== username));
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || 'Failed to delete the user.');
          });
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete the user. Please try again.');
      });
  };
  

  return (
    <Card className="h-full w-full overflow-scroll" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardHeader
        floated={false}
        shadow={false}
        className="mb-2 rounded-none p-2"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="w-full md:w-96 flex flex-row items-center space-x-4">
        <Input
          label="Search Users"
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          crossOrigin=""
          className="flex-grow"
        />
        <LabelInputContainer
          className="mb-6"
          style={{
            maxWidth: "300px",
          }}
        >
          <Label htmlFor="role">Category</Label>
          <Select
            radius="sm"
            placeholder="Select Category"
            aria-label="Select Category"
            style={{ width: "100%" }}
            onSelectionChange={(keys) => handleSelectBook(keys)}
          >
            <SelectItem key="users">Users</SelectItem>
            <SelectItem key="books">Books</SelectItem>
            <SelectItem key="mappings">Mappings</SelectItem>
          </Select>
        </LabelInputContainer>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {keyType === "mappings" && (
          <IconButton variant="text" size="sm" placeholder="" onClick={handleAddMapping} onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <FolderPlusIcon className="h-6 w-6 text-gray-900" />
        </IconButton>
        )}
      </div>
      </CardHeader>

      
      <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {tableHead.map(({ head }) => (
            <th key={head} className="border-b border-gray-300 p-4">
              <div className="flex items-center gap-1">
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="!font-bold"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {head}
                </Typography>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {keyType === "users" && (
        <tbody>
          {users.map(
            ({ id, username, email, institution, dept }, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
 
              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {id}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {institution}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {dept}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      {/* <IconButton 
                        variant="text" 
                        size="sm" 
                        placeholder="" 
                        onPointerEnterCapture={() => {}} 
                        onPointerLeaveCapture={() => {}}>
                        <FolderPlusIcon className="h-6 w-6 text-gray-900" />
                      </IconButton> */}
                      <IconButton 
                        variant="text" 
                        size="sm" 
                        placeholder="" 
                        onPointerEnterCapture={() => {}} 
                        onPointerLeaveCapture={() => {}} 
                        onClick={() => handleDeleteUser(username)} >
                        <TrashIcon className="h-6 w-6 text-gray-900" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      )}
        {keyType === "mappings" && (
  <tbody>
    {users.map(({ id, username, Book_ids, Book_Names }, index) => {
      const isLast = index === users.length - 1;
      const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

      return (
        <tr key={id}>
          <td className={classes}>
            <Typography variant="small" color="blue-gray" className="font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {id}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {username}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {Book_ids}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {Book_Names}
            </Typography>
          </td>
          <td className={classes}>
            <div className="flex items-center gap-2">
              
              <IconButton variant="text" size="sm" onClick={handleDeleteMapping} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <TrashIcon className="h-6 w-6 text-gray-900" />
              </IconButton>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
)}
{keyType === "books" && (
  <tbody>
    {users.map(({ id, title, author, category }, index) => {
      const isLast = index === users.length - 1;
      const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

      return (
        <tr key={id}>
          <td className={classes}>
            <Typography variant="small" color="blue-gray" className="font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {id}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {title}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {author}
            </Typography>
          </td>
          <td className={classes}>
            <Typography variant="small" className="font-normal text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {category}
            </Typography>
          </td>
          <td className={classes}>
            <div className="flex items-center gap-2">
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
)}

      </table>
    </Card>
  );
}


const LabelInputContainer = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // Allow passing custom styles
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)} style={style}>
      {children}
    </div>
  );
};