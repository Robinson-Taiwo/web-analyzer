import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export function DesignAnalysis({ url, issues }) {


  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Design Analysis for {url}</h3>
      {issues.map((issue, index) => (
        <Alert key={index} variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{issue.type}</AlertTitle>
          <AlertDescription>{issue.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}