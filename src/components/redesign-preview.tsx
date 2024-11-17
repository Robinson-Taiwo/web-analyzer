import Image from 'next/image'

export function RedesignPreview({ original, redesign }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Before and After Comparison</h3>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h4 className="text-sm font-medium mb-2">Original Design</h4>
          <Image src={original} alt="Original website design" width={400} height={300} className="rounded-md" />
        </div>
        <div className="w-1/2">
          <h4 className="text-sm font-medium mb-2">Redesigned Version</h4>
          <Image src={redesign} alt="Redesigned website" width={400} height={300} className="rounded-md" />
        </div>
      </div>
    </div>
  )
}