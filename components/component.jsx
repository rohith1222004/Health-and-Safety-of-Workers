/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4CWTic8hP2K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Demo() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SignalIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Worker Safety</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1 grid grid-cols-2 gap-4 p-6">
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Location Tracking</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Continuously track the worker&apos;s location and display it on a map.
          </p>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Map" className="w-full h-full object-cover rounded-md" />
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
          <Button variant="destructive" className="w-full">
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
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Proximity" className="w-full h-full object-cover rounded-md" />
          </div>
        </Card>
        <Card className="bg-card text-card-foreground p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ThermometerIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Pollution Detection</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Monitor air quality and noise levels, and alert workers if they exceed safe thresholds.
          </p>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Pollution" className="w-full h-full object-cover rounded-md" />
          </div>
        </Card>
        <Card className="bg-card text-card-foreground p-4 col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <TriangleAlertIcon className="h-6 w-6" />
            <h2 className="text-lg font-medium">Intelligent Alert System</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Analyze data from various sensors to identify dangerous zones and provide guidance to the nearest exit
            during emergencies.
          </p>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Alert System" className="w-full h-full object-cover rounded-md" />
          </div>
        </Card>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldIcon className="h-6 w-6" />
          <span className="text-sm">Worker Safety App</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SettingsIcon className="h-6 w-6" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <InfoIcon className="h-6 w-6" />
            <span className="sr-only">Info</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}

function CircleAlertIcon(props) {
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


function InfoIcon(props) {
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


function MapPinIcon(props) {
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


function MenuIcon(props) {
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


function RadarIcon(props) {
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


function SettingsIcon(props) {
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


function ShieldIcon(props) {
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


function SignalIcon(props) {
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


function ThermometerIcon(props) {
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


function TriangleAlertIcon(props) {
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


function XIcon(props) {
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