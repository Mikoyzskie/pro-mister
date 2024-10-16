import { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>Products</Suspense>
  )
}
