import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import UserList, { User } from "./UserList";
import { useEffect, useRef, useState } from "react";

import BasicTable from "../../components/Table/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Table from "../../components/TableExample/TableExample";
import withLoading from "../../hoc/withLoading";

const UserListWithLoading = withLoading(UserList);

const mockUsers = [{ id: 1, name: "Rokas", email: "Rokas@gmail.com" }];

const Examples = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUsers(mockUsers);
      setIsLoading(false);
    }, 2500);
  }, [mockUsers]);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const logs = [
    {
      date: "2022",
      title: (
        <div>
          <Button>Delete</Button>"Deleted user"
        </div>
      ),
      by: "Rokas",
    },
  ];

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
      <Button>YOYOYO</Button>
      <Button variant="contained">YOYOYO</Button>
      <Button variant="contained">YOYOYO</Button>
      <Button variant="contained" disableElevation>
        YOYOYO
      </Button>
      <Button variant="contained" disabled>
        YOYOYO
      </Button>
      <Button variant="outlined">YOYOYO</Button>
      <hr />
      <Button color="secondary">YOYOYO</Button>
      <Button color="secondary" variant="contained">
        YOYOYO
      </Button>
      <Button color="secondary" variant="contained">
        YOYOYO
      </Button>
      <Button color="error" variant="contained" disableElevation>
        YOYOYO
      </Button>
      <Button variant="contained" disabled>
        YOYOYO
      </Button>
      <Button variant="outlined">YOYOYO</Button>
      <hr />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <hr />
      <Typography>HEYHEYEHY</Typography>
      <Typography variant="body2">HEYHEYHYE</Typography>
      <Typography variant="subtitle1">HEYHEYE</Typography>
      <Typography variant="subtitle2">HEYEHYEHEY</Typography>
      <Typography color="textSecondary" variant="subtitle2">
        HEYEHYEHEY
      </Typography>
      <hr />
      <Box
        padding={1}
        sx={(theme) => ({ border: `1px solid ${theme.palette.primary.main}` })}
      >
        asd
      </Box>
      <BasicTable />
      <Table columns={["Title", "Date", "By"]} data={logs}>
        {(rowData, column) => rowData[column.toLowerCase()]}
      </Table>
      <br />
      {/* {isLoading ? <CircularProgress /> : <UserList users={users} />} */}
      <UserListWithLoading users={users} loading={isLoading} />
      <UserList users={users} />
    </div>
  );
};

export default Examples;
