import Menu from "../Components/menu";

export default function Home() {
    const name = 'Fachreiza';
    return (
        <div>
            <Menu />
            <h1>Hello World, {name}!!!</h1>
        </div>
    );
}