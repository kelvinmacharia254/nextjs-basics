import { montserrat } from "./ui/fonts"
export default function NotFound() {
    return (
        <>
            <main className={`${montserrat.className} not-found`}>
                <h1>Not Found</h1>
                <p>Unfortunately, we could not find the page or resource.</p>
            </main>
        </>
    );
}
