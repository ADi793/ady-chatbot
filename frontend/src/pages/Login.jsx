import { GoogleLogin } from "@react-oauth/google";
import { Box } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { setToLocalStorage } from "../utils/localStorage";
import { AUTH_KEY } from "../utils/constants";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onSucess = async (credentialResponse) => {
    try {
      const { name, email } = jwtDecode(credentialResponse.credential);
      const { data } = await axios.post("http://localhost:3001/api/user/auth", {
        name,
        email,
      });

      console.log(data);

      setToLocalStorage(AUTH_KEY, data.auth_token);
      navigate("/");
    } catch (error) {
      console.log("Error occured...");
    }
  };

  return (
    <Box
      as="main"
      h="calc(100vh - 63px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <GoogleLogin
        onSuccess={onSucess}
        onError={() => {
          console.log("Login Failed");
        }}
        auto_select={false}
      />
    </Box>
  );
}

export default Login;
