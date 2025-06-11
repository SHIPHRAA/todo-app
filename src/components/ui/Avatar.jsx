export default function Avatar({ src, alt = "Avatar", className = "" }) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      <img
        src={src || "/placeholder.svg?height=40&width=40"}
        alt={alt}
        className="aspect-square h-full w-full object-cover"
      />
    </div>
  )
}
