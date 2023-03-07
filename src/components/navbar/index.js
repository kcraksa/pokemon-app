const { Navbar } = require("flowbite-react")

const PokemonAppNavbar = () => {
    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="http://localhost:3000">Pokemon App</Navbar.Brand>
        </Navbar>
    )
}
export default PokemonAppNavbar;