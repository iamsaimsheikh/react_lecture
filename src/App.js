import Container from "@mui/material/Container";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./components/MUI/Navbar";
import Card from "./components/MUI/MyCard";
import CardList from "./components/MUI/CardList";

function App() {
  return (
    <div className="App">
      <Container maxWidth={false} sx={{ backgroudColor: "#fcfcfc" }}>
        <Box sx={{ padding: "20px", textAlign: "left" }}>
          <Typography fontWeight={600} fontSize={36} sx={{color:"#fcfcfc"}}>MY TECH STORE</Typography>
        </Box>
        
        <CardList />
        
      </Container>
    </div>
  );
}

export default App;
