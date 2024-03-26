import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";


function Header() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xxl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          DNS Manager
        </Typography>
        
        <div className="hidden gap-2 lg:flex">
          
          {/* <Button variant="gradient" size="sm">
            ADD DOMAIN
          </Button> */}
          <Button variant="gradient" size="sm">
            LOGOUT
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
