import Link from "next/link"

export default function Show() {
  return (
    <div className="show">
    <h1>Show page</h1>
    <div>
    <Link href='/'>Головна</Link>
    <Link href='/client'>Client</Link>
    </div>
    </div>
  )
}

