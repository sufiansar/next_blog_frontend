import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { getServerSession } from "next-auth";
import { authOptions } from "@/helpers/authOptions";
import { getUserSession } from "@/helpers/getUserSession";

export default async function DashboardHomePage() {
  const session = await getUserSession();

  return (
    <div className="p-6 space-y-6 items-center">
      {/* Header */}
      <h1 className="text-2xl font-bold">
        Welcome back, {session?.user?.name}
      </h1>

      <Separator />

      {/* User Info */}
      <Card className="max-w-md">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={session?.user?.image ?? undefined} alt="sufian" />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{session?.user?.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-semibold">Role:</span> User
          </p>
        </CardContent>
      </Card>

      {/* Example stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,245</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$4,520</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">32</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
