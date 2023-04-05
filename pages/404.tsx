import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <div className='a404'>
                <h1>404 - Page Not Found</h1>
                <Link href="/">← Back to home</Link>
            </div>
        </>
    )
  }