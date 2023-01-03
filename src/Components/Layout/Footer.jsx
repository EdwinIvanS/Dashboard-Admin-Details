import { Container } from "@mui/material";
const Footer = () => {
    return(
        <Container className="container-Footer">
            <div className="footer">
                {new Date().getFullYear()} © Pruebas.
            </div>
        </Container>
    );
}

export default Footer;