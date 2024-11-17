import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function UrlInput({ onAnalyze }) {
  const [inputUrl, setInputUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnalyze(inputUrl)
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="url"
        placeholder="Enter website URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        required
      />
      <Button type="submit">Analyze</Button>
    </form>
  )
}