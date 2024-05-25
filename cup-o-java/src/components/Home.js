export default function Home() {

    const [counter, setCounter] = usetState(0);

    useEffect(() => {
        console.log('counter', counter);
}, [counter]);

return (
    <>
        <div>Home</div>
    </>
)