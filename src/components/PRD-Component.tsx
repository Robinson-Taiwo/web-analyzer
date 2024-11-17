import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PrdComponent() {
  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">PRD for Feature X: Website Redesign Analyzer</h1>
          <p className="text-sm text-muted-foreground">Author: Natalie PM - (Signoff)</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-1">
              <li>Product Manager: Natalie PM</li>
              <li>Engineering Lead/Team Lead: Ella</li>
              <li>Designer: Jorge</li>
            </ul>
            <p className="mt-2">
              <strong>Approvers/Sign-Off:</strong> Ella
            </p>
            <p className="mt-2">
              <strong>PM Epic:</strong> [Insert link to Project Management tool epic (on JIRA or similar tool)]
            </p>
            <p>
              <strong>Status of PRD:</strong> <Badge>Backlog</Badge>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>One Pager for Feature X</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Overview</h3>
              <p>
                The Website Redesign Analyzer is an AI-powered tool that helps businesses evaluate and improve the
                design of their existing websites. By entering a website URL, users receive an analysis that highlights
                design issues such as color contrast, readability, and layout. The platform then generates a proposed
                redesign to address these issues, offering users an accessible and cost-effective solution for enhancing
                their site&apos;s look and usability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Objectives</h3>
              <ol className="list-decimal pl-4 space-y-1">
                <li>Provide accurate, instant analysis of existing website design issues.</li>
                <li>Generate a new, optimized design mockup that corrects identified issues.</li>
                <li>Allow users to view their original and redesigned site side-by-side.</li>
                <li>Offer downloadable reports for users to share with designers or development teams.</li>
                <li>Support our ecosystem goals.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold">Problem</h3>
              <p>
                Many businesses and designers lack an efficient way to understand design flaws and implement
                improvements on their websites. Issues like low color contrast, poor layout, and unclear navigation
                often impact user experience, but identifying and resolving them can be complex and costly. This tool
                will address the need for a quick and affordable solution that identifies design issues and suggests
                modern, optimized layouts.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">URL Input and Website Crawler:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Textbox for users to enter the URL of their website.</li>
                <li>Backend crawler gathers and analyzes design data (colors, contrast, layout, etc.) from the URL.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Design Analysis and Error Highlighting:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  AI model analyzes the site for issues like low color contrast, poor font readability, layout
                  inconsistencies, and unoptimized images.
                </li>
                <li>
                  Visual error highlighting that marks issues on the original website, using colored outlines or icons
                  to indicate specific design flaws.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">AI-Generated Redesign:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  New design generation based on best practices in UI/UX, which corrects issues found in the original
                  design.
                </li>
                <li>
                  Layout, color, and typography adjustments that align with accessibility and user-friendly standards.
                </li>
                <li>Option to display before-and-after views side-by-side.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Report:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  Generation of a detailed report that includes the original site&apos;s design analysis, identified issues,
                  and AI-generated redesign mockup.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                As a user, I want to enter a website URL so that I can analyze the design quality of my existing site.
              </li>
              <li>
                As a user, I want the tool to highlight design issues such as color contrast problems and layout flaws
                so that I can understand what needs improvement.
              </li>
              <li>
                As a user, I want to view a new, AI-generated design that corrects these issues, so I can visualize how
                my website could look with optimized design.
              </li>
              <li>
                As a user, I want to compare the original website and the redesigned version side-by-side to clearly see
                the differences and improvements.
              </li>
              <li>
                As a user, I want to download a report of the analysis and redesign suggestions so that I can share it
                with my design and development team.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Input Module</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Text Input Field: Field where users input the URL of their website.</li>
                <li>Submit Button: Initiates the website analysis upon user action.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Crawler and Analysis Module</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Web Crawler: Scrapes website data such as HTML structure, CSS, images, and text content.</li>
                <li>
                  AI Analysis: Identifies design errors related to color, contrast, layout, typography, and image
                  quality.
                </li>
                <li>
                  Error Highlighting: Visually marks issues on the original site layout with colored outlines and
                  explanatory icons.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Redesign Generation Module</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>AI Model: Creates a mockup of an optimized website design that addresses identified issues.</li>
                <li>Redesign Display: Presents the new layout as a visual preview to the user.</li>
                <li>
                  Side-by-Side Comparison: Enables users to view the original design with highlighted issues and the new
                  redesign simultaneously.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Report Module</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Report Generator: Compiles analysis data and redesigned mockup.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GTM Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our AI-powered Website Redesign Analyzer identifies design flaws and generates a mockup for a visually
              optimized site. Perfect for small businesses, agencies, and designers, it&apos;s an instant way to enhance your
              website&apos;s look and usability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-4 space-y-1">
              <li>User Engagement: Track the number of users who input URLs and generate redesigns.</li>
              <li>Completion Rate: Percentage of users who view the redesign and download the analysis report.</li>
              <li>Conversion Rate: Number of users who recommend the tool or return for multiple analyses.</li>
              <li>Time to Redesign: Measure average time taken for the AI to analyze and generate a redesign.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scenarios</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Case 1: A small business owner wants to improve their website</h3>
              <p>
                Sam enters his website URL into the tool. After a quick analysis, he views the highlighted design issues
                on his original site and the suggested improvements. He downloads the report to review the proposed
                design changes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Case 2: A freelance designer provides quick insights for a client</h3>
              <p>
                Alex, the freelance designer, uses the tool to analyze a client&apos;s website. The tool generates a new
                design mockup, which Alex downloads and uses to present a visual before-and-after of the client&apos;s site,
                saving time and impressing the client.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Case 3: A marketing agency uses the tool for pitching services</h3>
              <p>
                Jordan, working in an agency, uses the tool to generate redesigns for multiple clients. The team uses
                the before-and-after comparison and downloadable report to build a portfolio, demonstrating potential
                website improvements to prospective clients.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features In</CardTitle>
            <CardDescription>[M] denotes minimum viable experience requirement for Product X</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Core analysis</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>[M] Textbox for URL input to analyze any company&apos;s website.</li>
                <li>[M] Backend web crawler to access and retrieve site data.</li>
                <li>[M] AI-driven analysis of design issues on the original website.</li>
                <li>[M] Real-time error highlighting on the current website (colors, contrast, font size, alignment).</li>
                <li>[M] AI-generated redesign mockup addressing identified design issues.</li>
                <li>[M] Side-by-side comparison view of original and redesigned sites for easy evaluation.</li>
                <li>[M] Downloadable PDF report summarizing analysis and proposed improvements.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">User Interaction</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>[M] Simple, clean interface with intuitive controls for URL input and analysis.</li>
                <li>[M] Support for exporting redesigned mockup as a downloadable file.</li>
                <li>Optional login feature to store and retrieve previous analyses for repeat users.</li>
                <li>Basic interactive elements for user feedback on analysis accuracy and design suggestions.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Compatibility</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>[M] Cross-browser compatibility for Chrome, Firefox, Safari, and Edge.</li>
                <li>Mobile-responsive design for use on tablets and smartphones.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Technical Requirements</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>[M] Secure handling of user-provided URLs and website data, compliant with GDPR.</li>
                <li>Scalable backend for efficient analysis processing under high usage loads.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features Out</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <strong>Customizable Redesign Elements:</strong> Customizing specific elements of the redesign mockup
                (e.g., colors, font, layout) is out of scope for this release to keep processing time fast and
                manageable.
              </li>
              <li>
                <strong>Detailed Code Export:</strong> Providing a full codebase export of the redesigned website is not
                included in the MVP to focus on providing a visual redesign experience.
              </li>
              <li>
                <strong>SEO and Content Analysis:</strong> While valuable, SEO-focused analysis (e.g., meta tags,
                keyword density) is not included in this version since the tool is centered around visual design
                enhancements.
              </li>
              <li>
                <strong>User Accounts and Saved Projects:</strong> No user authentication or saved session feature will
                be included in the MVP, to reduce development complexity and initial security concerns.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <strong>User Access and Retention:</strong> How can we encourage users to return to the tool after the
                initial analysis? Solutions may include a subscription model or expanded features for long-term value.
              </li>
              <li>
                <strong>Resource Management for Scalability:</strong> Web crawler and AI processing may require
                significant resources. A caching system or usage limits per session might be necessary for large-scale
                adoption.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Confirm compliance with local laws regarding web crawling and data
                analysis. Evaluate integration of consent-based tracking for user data.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Q&A</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Drop your questions here:</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asked by</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Answer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Timeline and Phasing</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Dates</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Dropbox integration</TableCell>
                  <TableCell>
                    <Badge variant="secondary">In Development</Badge>
                  </TableCell>
                  <TableCell>Nov 23, 2022</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Localization</TableCell>
                  <TableCell>
                    <Badge variant="outline">In Review</Badge>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Android port</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Blocked</Badge>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Activity stream</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Blocked</Badge>
                  </TableCell>
                  <TableCell>Feb 8, 2023</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}