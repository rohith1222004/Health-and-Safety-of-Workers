/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4CWTic8hP2K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { PieComp } from "@/components/pie";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChartConfig } from "@/components/ui/chart";
import { Car, PhoneIcon, UserIcon } from "lucide-react"
import {AreaChartComp} from "../components/areaChart"
import { toast, useToast } from "@/components/ui/use-toast"


const chartConfig = {
  visitors: {
    label: "Workers",
  },
  chrome: {
    label: "Proximity",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Hazardous gas",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Non affected Workers",
    color: "hsl(var(--chart-3))",
  },
  
} satisfies ChartConfig;

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function page() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SignalIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Worker Safety</h1>
        </div>
        <Button variant="ghost"    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} size="icon" className="rounded-full">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1 grid grid-cols-2 gap-4 p-6">
      <PieComp chartConfig={chartConfig}/>
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Location Tracking</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Continuously track the worker&apos;s location.
          </p>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">John</span>
                <span className="text-xs text-blue-600">Node 1</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Rohith</span>
                <span className="text-xs text-blue-600">Node 4</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Sasi</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Dhoni</span>
                <span className="text-xs text-blue-600">Node 3</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Vishal</span>
                <span className="text-xs text-blue-600">Node 2</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Michael</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
            </div>
          </div>

        </Card>
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CircleAlertIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">SOS Functionality</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Allow workers to trigger an SOS alert that sends their location to emergency contacts and authorities.
          </p>
          <Card>
            <CardContent className="p-8">
                <h1 className="">Initiated SOS by</h1>
                <div className="flex-1 mt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">John</span>
                <span className="text-xs text-blue-600">Node 1</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Rohith</span>
                <span className="text-xs text-blue-600">Node 4</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Sasi</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Dhoni</span>
                <span className="text-xs text-blue-600">Node 3</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Vishal</span>
                <span className="text-xs text-blue-600">Node 2</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Michael</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Vishal</span>
                <span className="text-xs text-blue-600">Node 2</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Michael</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Vishal</span>
                <span className="text-xs text-blue-600">Node 2</span>
              </div>
              <div className="border border-primary border-gray-400 text-primary-foreground p-2 rounded-md flex items-center justify-between">
                <UserIcon className="h-5 w-5" />
                <span className="text-gray-900">Michael</span>
                <span className="text-xs text-blue-600">Node 6</span>
              </div>
            </div>
          </div>
            </CardContent>
          </Card>
          <Button variant="destructive"   onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} className="w-full mt-32">
            <CircleAlertIcon className="h-5 w-5 mr-2" />
            Trigger SOS
          </Button>
        </Card>
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <RadarIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Proximity Detection</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Detect if workers are in close proximity to dangerous zones or equipment and provide real-time alerts.
          </p>
<div className="flex justify-center mt-10"> 
<div className="grid grid-cols-2 gap-10 justify-center">
  <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
    <CardContent className="flex justify-center flex-col">
      <div className="flex items-center gap-2 justify-center">
        <UserIcon className="h-6 w-6" />
        <h2 className="text-lg font-medium">Alice</h2>
      </div>
      <p className="text-sm text-muted-foreground p-4">
        Alice entered into the dangerous zones near Node 4
      </p>
      <Button variant="destructive"    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} className="w-full">
        <PhoneIcon className="h-5 w-5 mr-2" />
        Call
      </Button>
    </CardContent>
  </Card>
  <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
    <CardContent className="flex justify-center flex-col">
      <div className="flex items-center gap-2 justify-center">
        <UserIcon className="h-6 w-6" />
        <h2 className="text-lg font-medium">Bob</h2>
      </div>
      <p className="text-sm text-muted-foreground p-4">
        Bob entered into the dangerous zones near Node 6
      </p>
      <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
        <PhoneIcon className="h-5 w-5 mr-2" />
        Call
      </Button>
    </CardContent>
  </Card>
  <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
    <CardContent className="flex justify-center flex-col">
      <div className="flex items-center gap-2 justify-center">
        <UserIcon className="h-6 w-6" />
        <h2 className="text-lg font-medium">Charlie</h2>
      </div>
      <p className="text-sm text-muted-foreground p-4">
        Charlie entered into the dangerous zones near Node 2
      </p>
      <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
        <PhoneIcon className="h-5 w-5 mr-2" />
        Call
      </Button>
    </CardContent>
  </Card>
  <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
    <CardContent className="flex justify-center flex-col">
      <div className="flex items-center gap-2 justify-center">
        <UserIcon className="h-6 w-6" />
        <h2 className="text-lg font-medium">Diana</h2>
      </div>
      <p className="text-sm text-muted-foreground p-4">
        Diana entered into the dangerous zones near Node 5
      </p>
      <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
        <PhoneIcon className="h-5 w-5 mr-2" />
        Call
      </Button>
    </CardContent>
  </Card>
</div>
</div>            
        </Card>
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ThermometerIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium"> Hazardous gas detection</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Monitor air quality and noise levels, and alert workers if they exceed safe thresholds.
          </p>
          <div className="flex justify-center mt-10">
<div className="grid grid-cols-2 gap-10 justify-center" >
   <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
            <CardContent className="flex justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <UserIcon className="h-6 w-6" />
                <h2 className="text-lg font-medium">John</h2>
            </div>
              <p className="text-sm text-muted-foreground p-4">
                  John entered into the dangerous zones near to Node 3
              </p>
              <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call
            </Button>
            </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
            <CardContent className="flex justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <UserIcon className="h-6 w-6" />
                <h2 className="text-lg font-medium">Sasidharan</h2>
            </div>
              <p className="text-sm text-muted-foreground p-4">
              Sasidharan entered into the dangerous zones near to Node 1
              </p>
              <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call
            </Button>
            </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
            <CardContent className="flex justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <UserIcon className="h-6 w-6" />
                <h2 className="text-lg font-medium">Vishal</h2>
            </div>
              <p className="text-sm text-muted-foreground p-4">
              Vishal entered into the dangerous zones near to Node 5
              </p>
              <Button     onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call
            </Button>
            </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground p-2 flex flex-col gap-4 w-60 h-52">
            <CardContent className="flex justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <UserIcon className="h-6 w-6" />
                <h2 className="text-lg font-medium">Rohith</h2>
            </div>
              <p className="text-sm text-muted-foreground p-4">
              Rohith entered into the dangerous zones near to Node 2
              </p>
              <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="destructive" className="w-full">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call
            </Button>
            </CardContent>
    </Card>
</div>
</div> 
        </Card>
        <Card className="bg-card text-card-foreground p-4 col-span-2 flex flex-col gap-4">  
          <div className="flex items-center gap-2">
            <TriangleAlertIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Casuality Trend</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Analyze data from various sensors to identify dangerous zones and provide guidance to the nearest exit
            during emergencies.
          </p>
          <div className="w-1/2">
            <AreaChartComp chartConfig={areaChartConfig}/>
          </div>
        </Card>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldIcon className="h-6 w-6" />
          <span className="text-sm">Worker Safety App</span>
        </div>
        <div className="flex items-center gap-2">
          <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="ghost" size="icon" className="rounded-full">
            <SettingsIcon className="h-6 w-6" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button    onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }} variant="ghost" size="icon" className="rounded-full">
            <InfoIcon className="h-6 w-6" />
            <span className="sr-only">Info</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}

function CircleAlertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function InfoIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MapPinIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function RadarIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </svg>
  )
}


function SettingsIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShieldIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SignalIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function ThermometerIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function TriangleAlertIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function XIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}