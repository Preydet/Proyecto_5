import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
        <Header />

        <Container sx={{ marginTop: 4 }}>
            {children}
        </Container>

        <Footer />          
    </>
  )
}

export default Layout;